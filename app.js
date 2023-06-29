const express = require("express");
const app = express();

const logController = require("./controllers/captainLogsControllers");

app.use(express.json());

app.use("/logs", logController);

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found!" });
});

module.exports = app;
