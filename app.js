const express = require('express')
const logger = require('morgan')
const controller = require('./controllers/logsController')
const app = express()

app.use(express.json())
app.use(logger('log'))
app.use('/logs', controller)


app.get('/', (req,res) => {
    res.send("welcome to the captain's log")
})
app.get('*', (req,res) => {
    res.status(404).send('Page not found')
})

module.exports = app;