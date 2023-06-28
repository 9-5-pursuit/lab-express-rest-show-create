const express = require("express");
const logs = express.Router();
const logsArray = require("../models/models.logs.js");
const { logsValidator } = require("../models/validator.js");

logs.get("/", (request, response) => {
  response.json(logsArray);
});

logs.get("/:index", (request, response) => {
  const { index } = request.params;
  response.json(logsArray);
  if (logsArray[index]) {
    response.json(logsArray[index]);
  } else {
    response.status(404).json({ error: "Log not Found" });
  }
});

logs.post("/", logsValidator, (request, response) => {
  logsArray.push(request.body);
  response.status(201).json(logsArray);
});



module.exports = logs;
