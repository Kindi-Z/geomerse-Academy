const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Baca file users.json
const usersPath = path.join(__dirname, 'users.json');
const readUsers = () => {
  const data = fs.readFileSync(usersPath, 'utf8');
  return JSON.parse(data).users;
};

// Endpoint login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validasi input tidak kosong
  if (!username || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Username dan password harus diisi' 
    });
  }

  const users = readUsers();
  const validUser = users.find(
    user => user.username === username && user.password === password
  );

  if (validUser) {
    return res.json({
      success: true,
      username: validUser.username,
      role: validUser.role,
      message: 'Login berhasil'
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Username atau password salah'
    });
  }
});

// Endpoint test (opsional, cek server hidup)
app.get('/ping', (req, res) => {
  res.json({ message: 'Server berjalan!' });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
  console.log(`📝 Endpoint login: POST http://localhost:${PORT}/login`);
});
