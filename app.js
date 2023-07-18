const express = require("express");
const logController = require("./controllers/logsController.js");
const app = express();

app.use(express.json());

app.use("/logs", logController);

app.get("/", (req, res) => {
  res.json("welcome to the captains log");
  console.log("welcome to the captains log");
});

module.exports = app;
