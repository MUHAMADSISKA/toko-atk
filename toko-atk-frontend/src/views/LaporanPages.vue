<template>
    <div>
        <h1>Laporan</h1>
        <div class="form-group">
            <label for="tanggal_awal">Tanggal Awal:</label>
            <input type="date" class="form-control" id="tanggal_awal" v-model="tanggal_awal">
        </div>
        <div class="form-group">
            <label for="tanggal_akhir">Tanggal Akhir:</label>
            <input type="date" class="form-control" id="tanggal_akhir" v-model="tanggal_akhir">
        </div>
        <button @click="getLaporan">Generate Laporan</button>
        <div v-if="laporan">
            <h2>Laporan Penjualan</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Tanggal</th>
                        <th>Total Penjualan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in laporan" :key="index">
                        <td>{{ item.tanggal }}</td>
                        <td>{{ item.total_penjualan }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Laporan',
    data() {
        return {
            tanggal_awal: '',
            tanggal_akhir: '',
            laporan: null
        };
    },
    methods: {
        getLaporan() {
            // Panggil API untuk mendapatkan data laporan
        }
    }
};
</script>