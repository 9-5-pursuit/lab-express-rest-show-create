const express = require("express");

//Bring in logs controller
const logsController = require("./controllers/logsController");

const app = express();

//USE the logs controller with the help of middlware
app.use("/logs", logsController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
