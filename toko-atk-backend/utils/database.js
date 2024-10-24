const mysqlBackup = require('mysql-backup');

// Fungsi untuk backup database
function backupDatabase() {
    const backup = new mysqlBackup({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    });

    backup.create('./backup/toko_atk.sql', (err) => {
        if (err) console.error('Error during backup:', err);
        else console.log('Database backed up successfully!');
    });
}

// Fungsi untuk restore database
function restoreDatabase(filePath) {
    const backup = new mysqlBackup({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
    });

    backup.restore(filePath, (err) => {
        if (err) console.error('Error during restore:', err);
        else console.log('Database restored successfully!');
    });
}

module.exports = { backupDatabase, restoreDatabase };