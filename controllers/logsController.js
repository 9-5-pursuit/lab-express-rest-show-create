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

logs.put("/:index", logsValidator, (request, response) => {
  const { index } = request.params;
  if (logsArray[index]) {
    logsArray[index] = request.body;
    response.status(200).json(logsArray[index]);
  } else {
    response.status(404).json({ error: "Not Found" });
  }
});
logs.delete("/:logs", (request, response) => {
  const { index } = request.params;
  if (logsArray[index]) {
    const deletedlogs = logsArray.splice(index, 1);
    response.status(200).json(logsArray);
  } else {
    response.status(404).json({ error: "Not Found" });
  }
});

module.exports = logs;
