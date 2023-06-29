const express = require("express");
const logsController = express.Router();

let logsArray = require("../models/log.js");
const { logsValidator } = require("../models/validator.js");

logsController.get("/", (request, response) => {
  response.send(logsArray);
});

logsController.get("/:index", (request, response) => {
  const { index } = request.params;

  if (logsArray[index]) {
    response.json(logsArray[index]);
  } else {
    response.redirect("/400");
  }
});

logsController.post("/", logsValidator, (request, response) => {
  logsArray.push(request.body);
  response.json(logsArray[logsArray.length - 1]);
});

logsController.put("/:index", logsValidator, (request, response) => {
  const { index } = request.params;
  if (logsArray[index]) {
    logsArray.splice(index, 0, request.body);
    response.status(200).json({ status: 200, message: "resource updated" });
  } else {
    response.redirect("/404");
  }
});
logsController.delete("/:index", (request, response) => {
  const { index } = request.params;
  if (logsArray[index]) {
    logsArray.splice(index, 1);
    response.status(200).json({ status: 200, message: "resource deleted" });
  } else {
    response.redirect("/404");
  }
});

module.exports = logsController;
