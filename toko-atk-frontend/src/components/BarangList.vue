<template>
    <div>
        <h1>Daftar Barang</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Kategori</th>
                    <th>Jenis</th>
                    <th>Merek</th>
                    <th>Satuan</th>
                    <th>Harga Beli</th>
                    <th>Harga Jual</th>
                    <th>Stok Minimum</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="barang in barangList" :key="barang.id">
                    <td>{{ barang.nama }}</td>
                    <td>{{ barang.kategori }}</td>
                    <td>{{ barang.jenis }}</td>
                    <td>{{ barang.merek }}</td>
                    <td>{{ barang.satuan }}</td>
                    <td>{{ barang.harga_beli }}</td>
                    <td>{{ barang.harga_jual }}</td>
                    <td>{{ barang.stok_minimum }}</td>
                    <td>
                        <button @click="editBarang(barang.id)">Edit</button>
                        <button @click="deleteBarang(barang.id)">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="addBarang">Tambah Barang</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BarangList',
    data() {
        return {
            barangList: []
        };
    },
    mounted() {
        this.getBarang();
    },
    methods: {
        getBarang() {
            axios.get('http://localhost:3000/api/barang')
                .then(response => {
                    this.barangList = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        addBarang() {
            // Navigasi ke form tambah barang
        },
        editBarang(id) {
            // Navigasi ke form edit barang dengan id yang diberikan
        },
        deleteBarang(id) {
            // Panggil API untuk menghapus barang dengan id yang diberikan
            axios.delete(`http://localhost:3000/api/barang/${id}`)
                .then(response => {
                    this.getBarang();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
};
</script>

<script>
import io from 'socket.io-client';
const socket = io('http://localhost:3000'); // Ganti dengan URL server backend

// ...

mounted() {
    this.getBarang();
    socket.on('lowStock', (data) => {
        // Handle notifikasi stok rendah
        console.log(`Stok barang dengan ID ${data.barangId} rendah: ${data.stok}`);
        // Tampilkan notifikasi ke user (misalnya, alert)
    });
},
beforeDestroy() {
    socket.disconnect(); 
}
// ...
</script>