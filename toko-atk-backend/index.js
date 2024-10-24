const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const barangRouter = require('./controllers/barang');
const authRouter = require('./controllers/auth');
const userRouter = require('./controllers/user'); // Import userRouter
// Import other controllers here

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRouter); // Menambahkan route untuk autentikasi
app.use('/api/barang', barangRouter);
app.use('/api/user', userRouter); // Menambahkan route untuk user management
// Define other routes here

// Middleware autentikasi
app.use((req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
});

// Route yang memerlukan autentikasi
app.get('/api/barang', (req, res) => {
    // Akses data user dari req.user
    res.json({ message: 'Authenticated user', user: req.user });
});

app.get('/api/dashboard', (req, res) => {
    // Logic untuk mendapatkan data dashboard (total penjualan, pembelian, stok)
    // ... (query database untuk mendapatkan data)
    res.json({ totalPenjualan: 1000, totalPembelian: 500, totalStok: 200 }); // Contoh data
});

const io = require('socket.io')(server); 

io.on('connection', socket => {
    console.log('A user connected');

    // Panggil API untuk mendapatkan data stok secara berkala
    setInterval(() => {
        // ... (query database untuk mendapatkan data stok)
        // Emit notifikasi ke klien jika stok rendah
        io.emit('lowStock', { barangId: 1, stok: 5 });
    }, 5000); // Cek setiap 5 detik

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});