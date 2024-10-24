<template>
    <div>
        <h1>User Management</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Role</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userList" :key="user.id">
                    <td>{{ user.username }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <button @click="editUser(user.id)">Edit</button>
                        <button @click="deleteUser(user.id)">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="addUser">Tambah User</button>
    </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UserManagement',
    data() {
        return {
            userList: []
        };
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        getUsers() {
            axios.get('http://localhost:3000/api/user')
                .then(response => {
                    this.userList = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        addUser() {
            // Navigasi ke form tambah user
        },
        editUser(id) {
            // Navigasi ke form edit user dengan id yang diberikan
        },
        deleteUser(id) {
            axios.delete(`http://localhost:3000/api/user/${id}`)
                .then(response => {
                    this.getUsers();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
});
</script>