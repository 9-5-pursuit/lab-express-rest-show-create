const express = require("express");
const morgan = require("morgan");

const logsController = require("./controllers/logs.controller");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/logs", logsController);

app.get("/", (req, res) => {
    res.send(`<h1>welcome to the captain's log</h1>`)
})

app.get("*", (req, res) => {
    res.status(404).json({ message: "page not found" })
})

module.exports = app;