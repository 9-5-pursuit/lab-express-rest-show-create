const express = require("express");
const app = express();
const morgan = require("morgan");

const indexController = require("./controllers/indexController");
const logsController = require("./controllers/logsController");

app.use(express.json());
app.use(morgan("dev"));
app.use("/", indexController);
app.use("/logs", logsController);

module.exports = app;
