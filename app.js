const express = require("express");
const cors = require("cors");

const logController = require("./controllers/logController");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/logs", logController);

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry, page not found!");
});

module.exports = app;
