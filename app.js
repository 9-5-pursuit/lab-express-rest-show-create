const express = require("express")

const logsController = require("./controllers/logController")

const app = express()

app.use(express.json());

app.use("/logs", logsController)

app.get ("/", (req,res) => {
    res.send("Welcome to the Captains Log");
})

app.use("*", (req,res) => {
    res.status(404).send("Sorry, no page found!")
})

module.exports = app;