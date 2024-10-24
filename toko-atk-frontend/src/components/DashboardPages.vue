<template>
    <div>
        <h1>Dashboard</h1>
        <div>Total Penjualan: {{ totalPenjualan }}</div>
        <div>Total Pembelian: {{ totalPembelian }}</div>
        <div>Stok Barang: {{ totalStok }}</div>
        <!-- Tambahkan grafik atau visualisasi lainnya -->
    </div>
</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Dashboard',
    data() {
        return {
            totalPenjualan: 0,
            totalPembelian: 0,
            totalStok: 0
        };
    },
    mounted() {
        this.getDashboardData();
    },
    methods: {
        getDashboardData() {
            axios.get('http://localhost:3000/api/dashboard')
                .then(response => {
                    this.totalPenjualan = response.data.totalPenjualan;
                    this.totalPembelian = response.data.totalPembelian;
                    this.totalStok = response.data.totalStok;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
});
</script>