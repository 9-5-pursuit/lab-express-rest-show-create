const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const indexController = require("./controllers/indexController");
const logsController = require("./controllers/logsController");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/", indexController);
app.use("/logs", logsController);

app.use("*", (req, res) => {
  res.status(404).json({ status: false, message: "Sorry, page not found!" });
});

module.exports = app;
