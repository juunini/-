const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send(fs.readFileSync('index.html').toString());
});

app.get('/api/hello', (req, res) => {
  res.json({ message: fs.readFileSync('data.txt').toString() });
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
