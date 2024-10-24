const express = require('express');
const router = express.Router();
const connection = require('../database');
const bcrypt = require('bcrypt');

// Get all users
router.get('/', (req, res) => {
    connection.query('SELECT * FROM User', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get user by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM User WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
});

// Update user by ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { username, password, role } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        connection.query('UPDATE User SET username = ?, password = ?, role = ? WHERE id = ?', [username, hash, role, id], (err, results) => {
            if (err) throw err;
            res.json({ message: 'User updated successfully' });
        });
    });
});

// Delete user by ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM User WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'User deleted successfully' });
    });
});

module.exports = router;