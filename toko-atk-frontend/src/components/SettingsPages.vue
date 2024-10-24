<template>
    <div>
        <button @click="backupDatabase">Backup Database</button>
        <input type="file" @change="restoreDatabase">
    </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import { backupDatabase, restoreDatabase } from '../utils/database';

export default defineComponent({
    name: 'Settings',
    methods: {
        backupDatabase() {
            axios.post('http://localhost:3000/api/backup') // Endpoint API untuk backup
                .then(response => {
                    // Handle response
                    console.log('Backup berhasil');
                })
                .catch(error => {
                    console.error(error);
                });
        },
        restoreDatabase(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const data = e.target.result;
                    axios.post('http://localhost:3000/api/restore', { data }) // Endpoint API untuk restore
                        .then(response => {
                            // Handle response
                            console.log('Restore berhasil');
                        })
                        .catch(error => {
                            console.error(error);
                        });
                };
                reader.readAsText(file);
            }
        }
    }
});
</script>