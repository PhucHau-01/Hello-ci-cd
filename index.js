const express = require('express');
const app = express();
const sayHello = require('./sayHello'); // file bạn đang có, đổi tên thành sayHello.js

const PORT = 3000;

app.get('/', (req, res) => {
  const name = req.query.name || 'World';
  res.send(sayHello(name));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
