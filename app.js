const express = require("express");
const app = express();

app.use(express.json());

const logsController = require("./controllers/logsController")

app.use("/logs", logsController);

app.get("/", (req, res) => {
    res.send("Welcome to the captain's log");
});

app.use("*", (req, res) => {
    res.status(404).send("Sorry, no page found!")
});



module.exports = app;