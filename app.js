const express = require("express");
const logsController = require("./controllers/logsController");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Captian's Log");
});

app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not Found");
});

module.exports = app;