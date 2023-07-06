const express = require("express");
const cors = require("cors");

const logsController = require("./controllers/logsController");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.use("/logs", logsController);

app.use("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});

module.exports = app;
