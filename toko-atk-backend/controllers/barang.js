const express = require('express');
const router = express.Router();
const connection = require('../database');

// Get all barang
router.get('/', (req, res) => {
    connection.query('SELECT * FROM Barang', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get barang by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM Barang WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: 'Barang not found' });
        }
    });
});

// Create new barang
router.post('/', (req, res) => {
    const { nama, kategori, jenis, merek, satuan, harga_beli, harga_jual, stok_minimum, deskripsi } = req.body;
    connection.query('INSERT INTO Barang (nama, kategori, jenis, merek, satuan, harga_beli, harga_jual, stok_minimum, deskripsi) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [nama, kategori, jenis, merek, satuan, harga_beli, harga_jual, stok_minimum, deskripsi], (err, results) => {
        if (err) throw err;
        res.status(201).json({ message: 'Barang created successfully' });
    });
});

// Update barang by ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { nama, kategori, jenis, merek, satuan, harga_beli, harga_jual, stok_minimum, deskripsi } = req.body;
    connection.query('UPDATE Barang SET nama = ?, kategori = ?, jenis = ?, merek = ?, satuan = ?, harga_beli = ?, harga_jual = ?, stok_minimum = ?, deskripsi = ? WHERE id = ?', [nama, kategori, jenis, merek, satuan, harga_beli, harga_jual, stok_minimum, deskripsi, id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Barang updated successfully' });
    });
});

// Delete barang by ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM Barang WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Barang deleted successfully' });
    });
});

module.exports = router;