const express = require("express");
const morgan = require("morgan");

const app = express();

const controller = require("./controllers/controller");

app.use(express.json());
app.use("/logs", controller);

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.get("*", (req, res) => {
  res.status(404).json("Sorry this route does not exist!");
});

module.exports = app;
