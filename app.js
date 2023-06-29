const express = require("express");
const morgan = require("morgan");

const app = express();

const indexController = require("./controllers/indexController");
const logController = require("./controllers/logController");
const logsController = require("./v2/controllers/logsController");

app.use(express.json());
app.use(morgan("dev"));

app.use("/", indexController);
app.use("/logs", logController);
app.use("/v2/logs", logsController);

module.exports = app;
