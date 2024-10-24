<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" class="form-control" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Panggil API untuk login
            axios.post('http://localhost:3000/api/auth/login', { username: this.username, password: this.password })
                .then(response => {
                    // Simpan token di local storage dan redirect ke halaman dashboard
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
</script>