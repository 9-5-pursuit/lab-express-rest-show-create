//const app = require("../app.js");
const express = require("express");
const router = express.Router();

let logsArray = require("../models/log");

//Get a list (or index) of all logs
router.get("/", (req, res) => {
  res.json(logsArray);
});

//GET/Read -> an individual view (show one log) by ID or Index
router.get("/:index", (req, res) => {
  const { index } = req.params;
  if (!logsArray[index]) {
    res.redirect(`/*`);
  } else {
    res.json(logsArray[index]);
  }
});

//POST/Create ->  new log

router.post("/", (req, res) => {
  const incomingLog = req.body;

  if (!incomingLog) {
    res.redirect("/*");
  } else {
    logsArray.push(incomingLog);
    res.json(logsArray);
  }
});

//PUT/Update	-> Update a log
router.put("/:index", (req, res) => {
  let index = Number(req.params.index);

  let newData = logsArray[index];

  if (!newData) {
    res.redirect("/");
  } else {
    logsArray.splice(index, 1, req.body);
    req.send(req.body);
  }
});

//DELETE	-> Delete	Delete a log
router.delete("/:index", (req, res) => {
  const index = Number(req.params.index);

  const chosenItem = logsArray[index];

  if (!chosenItem) {
    res.status(404).json({ status: false, message: "invalid index" });
  } else {
    //make sure it only takes one by using splice
    logsArray.splice(index, 1);
    res.json(logsArray);
  }
});
module.exports = router;
