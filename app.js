const express = require("express");
const cors = require("cors");

const logsController = require("./controllers/logController");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;