const fs = require('fs');
const path = require('path');

// Ganti username dan password sesuai keinginan kamu!
const VALID_USERNAME = 'geomers';
const VALID_PASSWORD = 'rahasia123';

module.exports = (req, res) => {
  const authHeader = req.headers.authorization || '';
  
  // Jika tidak ada header login, minta login
  if (!authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Geomers Academy"');
    return res.status(401).send('Login diperlukan');
  }
  
  // Decode username:password dari browser
  const base64 = authHeader.split(' ')[1];
  const decoded = Buffer.from(base64, 'base64').toString();
  const [username, password] = decoded.split(':');
  
  // Cek apakah username & password benar
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    // Login berhasil! Tampilkan index.html
    const htmlPath = path.join(__dirname, '../index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } else {
    // Login gagal
    res.setHeader('WWW-Authenticate', 'Basic realm="Geomers Academy"');
    return res.status(401).send('Username atau password salah!');
  }
};