//DEPENDENCIES
const express = require("express");
const logger = require('morgan');

const logController = require('./controllers/logsController');

//CONFIGURATION
const app = express();

app.use(logger('dev'));
app.use(express.json());


//ROUTE

app.get('/', (req, res) => {
    res.send("Welcome to the captain's logs!");
})

app.use('/logs', logController);

app.get('*', (req, res) => {
    res.status(404).send('Sorry the page you have requested for does not exist.')
})
//EXPORT
module.exports = app;