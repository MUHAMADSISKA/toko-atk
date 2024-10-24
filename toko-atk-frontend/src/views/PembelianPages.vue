<template>
    <div>
        <h1>Pembelian</h1>
        <form @submit.prevent="savePembelian">
            <div class="form-group">
                <label for="supplier_id">Supplier:</label>
                <select class="form-control" id="supplier_id" v-model="supplier_id">
                    <option v-for="supplier in supplierList" :key="supplier.id" :value="supplier.id">
                        {{ supplier.nama }}
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
                <label for="harga_beli">Harga Beli:</label>
                <input type="number" class="form-control" id="harga_beli" v-model="harga_beli">
            </div>
            <button type="submit" class="btn btn-primary">Simpan</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Pembelian',
    data() {
        return {
            supplierList: [],
            barangList: [],
            supplier_id: '',
            tanggal: '',
            barang_id: '',
            jumlah: 0,
            harga_beli: 0
        };
    },
    mounted() {
        this.getSupplier();
        this.getBarang();
    },
    methods: {
        getSupplier() {
            // Panggil API untuk mendapatkan list supplier
        },
        getBarang() {
            // Panggil API untuk mendapatkan list barang
        },
        savePembelian() {
            const data = {
                supplier_id: this.supplier_id,
                tanggal: this.tanggal,
                barang_id: this.barang_id,
                jumlah: this.jumlah,
                harga_beli: this.harga_beli
            };

            // Panggil API untuk menyimpan data pembelian
        }
    }
};
</script>