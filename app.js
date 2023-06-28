const express = require("express");
const morgan = require("morgan");

const todoController = require("./controllers/logsController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", todoController);

module.exports = app;
