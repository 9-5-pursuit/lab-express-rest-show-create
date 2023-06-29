const express = require("express");
const router = express.Router();

let logsArray = require("../models/log");

router.get("/", (req, res) => {
  res.send(logsArray);
});

router.post("/", (req, res) => {
  const log = req.body;
  logsArray.push(log);

  res.status(202).json(logsArray);
});

router.get("/:arrayIndex", (req, res) => {
  const arrayIndex = req.params.arrayIndex;

  if (!logsArray[arrayIndex]) {
    res.status(404).redirect("/logs");
  } else {
    res.status(202).json(logsArray[arrayIndex]);
  }
});

router.put("/logs/:arrayIndex", (req, res) => {
  const arrayIndex = req.params.arrayIndex;
  const updatedLog = req.body;

  if (!logsArray[arrayIndex]) {
    res.status(404).send(`Sorry, there is no log in ${arrayIndex}!`);
  } else {
    logsArray[arrayIndex] = updatedLog;
    res.status(202).json(logsArray);
  }
});

router.delete("/:arrayIndex", (req, res) => {
  const arrayIndex = req.params.arrayIndex;

  if (!logsArray[arrayIndex]) {
    res.status(404).send(`Sorry, there is no log in ${arrayIndex}!`);
  } else {
    logsArray.splice(arrayIndex, 1);
    res.status(200).json(logsArray);
  }
});

module.exports = router;
