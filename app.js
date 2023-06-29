const express = require("express");
const morgan = require("morgan");
const logsController = require("./controllers/logsController");

// let logsArray = require("./models/logs");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", logsController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
