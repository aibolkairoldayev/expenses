const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',     
  password: '',     
  database: 'expense_tracker'  
});

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных установлено');
  }
});

app.get('/api/transactions', (req, res) => {
  const query = 'SELECT * FROM transactions';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/api/transactions', (req, res) => {
  const { author, date, amount, category, comment } = req.body;
  const query = 'INSERT INTO transactions (author, date, amount, category, comment) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [author, date, amount, category, comment], (error, results) => {
    if (error) throw error;
    res.json({ id: results.insertId, author, date, amount, category, comment });
  });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
