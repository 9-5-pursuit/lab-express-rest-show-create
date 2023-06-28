const express = require('express');
const app = express();
const morgan = require('morgan');
const logsController = require('./controllers/logsController');

app.use(morgan('dev'));
app.use(express.json());
app.use('/logs', logsController);

app.get('/', (req, res) => {
  res.send("Welcome to Captain's Log!");
});

app.get('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

module.exports = app;
