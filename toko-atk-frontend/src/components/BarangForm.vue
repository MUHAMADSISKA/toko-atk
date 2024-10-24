<template>
    <div>
        <h1>{{ isEdit ? 'Edit Barang' : 'Tambah Barang' }}</h1>
        <form @submit.prevent="saveBarang">
            <div class="form-group">
                <label for="nama">Nama Barang:</label>
                <input type="text" class="form-control" id="nama" v-model="nama" required>
            </div>
            <div class="form-group">
                <label for="kategori">Kategori:</label>
                <input type="text" class="form-control" id="kategori" v-model="kategori">
            </div>
            <div class="form-group">
                <label for="jenis">Jenis:</label>
                <input type="text" class="form-control" id="jenis" v-model="jenis">
            </div>
            <div class="form-group">
                <label for="merek">Merek:</label>
                <input type="text" class="form-control" id="merek" v-model="merek">
            </div>
            <div class="form-group">
                <label for="satuan">Satuan:</label>
                <input type="text" class="form-control" id="satuan" v-model="satuan">
            </div>
            <div class="form-group">
                <label for="harga_beli">Harga Beli:</label>
                <input type="number" class="form-control" id="harga_beli" v-model="harga_beli" required>
            </div>
            <div class="form-group">
                <label for="harga_jual">Harga Jual:</label>
                <input type="number" class="form-control" id="harga_jual" v-model="harga_jual" required>
            </div>
            <div class="form-group">
                <label for="stok_minimum">Stok Minimum:</label>
                <input type="number" class="form-control" id="stok_minimum" v-model="stok_minimum">
            </div>
            <div class="form-group">
                <label for="deskripsi">Deskripsi:</label>
                <textarea class="form-control" id="deskripsi" v-model="deskripsi"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">{{ isEdit ? 'Simpan' : 'Tambahkan' }}</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BarangForm',
    props: {
        isEdit: {
            type: Boolean,
            default: false
        },
        barangId: {
            type: Number
        }
    },
    data() {
        return {
            nama: '',
            kategori: '',
            jenis: '',
            merek: '',
            satuan: '',
            harga_beli: 0,
            harga_jual: 0,
            stok_minimum: 0,
            deskripsi: ''
        };
    },
    mounted() {
        if (this.isEdit) {
            this.getBarang();
        }
    },
    methods: {
        getBarang() {
            axios.get(`http://localhost:3000/api/barang/${this.barangId}`)
                .then(response => {
                    this.nama = response.data.nama;
                    this.kategori = response.data.kategori;
                    this.jenis = response.data.jenis;
                    this.merek = response.data.merek;
                    this.satuan = response.data.satuan;
                    this.harga_beli = response.data.harga_beli;
                    this.harga_jual = response.data.harga_jual;
                    this.stok_minimum = response.data.stok_minimum;
                    this.deskripsi = response.data.deskripsi;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        saveBarang() {
            const data = {
                nama: this.nama,
                kategori: this.kategori,
                jenis: this.jenis,
                merek: this.merek,
                satuan: this.satuan,
                harga_beli: this.harga_beli,
                harga_jual: this.harga_jual,
                stok_minimum: this.stok_minimum,
                deskripsi: this.deskripsi
            };

            if (this.isEdit) {
                axios.put(`http://localhost:3000/api/barang/${this.barangId}`, data)
                    .then(response => {
                        // Kembali ke daftar barang
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                axios.post('http://localhost:3000/api/barang', data)
                    .then(response => {
                        // Kembali ke daftar barang
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }
};
</script>