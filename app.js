const express = require("express");
const app = express();
const cors = require("cors");
// var morgan = require("morgan");
app.use(express.json());
app.use(cors());
const logsController = require("./controllers/logsController");

//middlewear
app.use("/logs", logsController);
//below, needed for post request
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi there");
});

app.use("*", (req, res) => {
  res.status(404).send("sorry, the page you requested cannot be found");
});

module.exports = app;
