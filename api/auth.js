const fs = require('fs');
const path = require('path');

const VALID_USERNAME = 'geomers';
const VALID_PASSWORD = '123456';

module.exports = (req, res) => {
  const authHeader = req.headers.authorization || '';
  
  if (!authHeader.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Geomers Academy"');
    return res.status(401).send('Login diperlukan');
  }
  
  const base64 = authHeader.split(' ')[1];
  const decoded = Buffer.from(base64, 'base64').toString();
  const [username, password] = decoded.split(':');
  
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    const htmlPath = path.join(__dirname, '../index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } else {
    res.setHeader('WWW-Authenticate', 'Basic realm="Geomers Academy"');
    return res.status(401).send('Username atau password salah!');
  }
};
