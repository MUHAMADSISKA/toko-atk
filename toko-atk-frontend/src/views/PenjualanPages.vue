<template>
    <div>
        <h1>Penjualan</h1>
        <form @submit.prevent="savePenjualan">
            <div class="form-group">
                <label for="pelanggan_id">Pelanggan:</label>
                <select class="form-control" id="pelanggan_id" v-model="pelanggan_id">
                    <option v-for="pelanggan in pelangganList" :key="pelanggan.id" :value="pelanggan.id">
                        {{ pelanggan.nama }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="tanggal">Tanggal:</label>
                <input type="date" class="form-control" id="tanggal" v-model="tanggal">
            </div>
            <div class="form-group">
                <label for="barang_id">Barang:</label>
                <select class="form-control" id="barang_id" v-model="barang_id">
                    <option v-for="barang in barangList" :key="barang.id" :value="barang.id">
                        {{ barang.nama }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="jumlah">Jumlah:</label>
                <input type="number" class="form-control" id="jumlah" v-model="jumlah">
            </div>
            <div class="form-group">
                <label for="harga_jual">Harga Jual:</label>
                <input type="number" class="form-control" id="harga_jual" v-model="harga_jual">
            </div>
            <button type="submit" class="btn btn-primary">Simpan</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Penjualan',
    data() {
        return {
            pelangganList: [],
            barangList: [],
            pelanggan_id: '',
            tanggal: '',
            barang_id: '',
            jumlah: 0,
            harga_jual: 0
        };
    },
    mounted() {
        this.getPelanggan();
        this.getBarang();
    },
    methods: {
        getPelanggan() {
            // Panggil API untuk mendapatkan list pelanggan
        },
        getBarang() {
            // Panggil API untuk mendapatkan list barang
        },
        savePenjualan() {
            const data = {
                pelanggan_id: this.pelanggan_id,
                tanggal: this.tanggal,
                barang_id: this.barang_id,
                jumlah: this.jumlah,
                harga_jual: this.harga_jual
            };

            // Panggil API untuk menyimpan data penjualan
        }
    }
};
</script>