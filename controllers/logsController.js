const express = require("express");
const router = express.Router();

// Use two dots to leave the controllers folder and enter models
let logsArray = require("../models/log");

// GET all logs
router.get("/", (req, res) => {
  res.status(200).json(logsArray);
});

// POST a new log
router.post("/", (req, res) => {
  const newLog = req.body;

  if (!newLog) {
    res.redirect("/*");
  } else {
    logsArray.push(newLog);
    res.status(200).json(logsArray);
  }
});

// GET a specific log by index
router.get("/:index", (req, res) => {
  const { index } = req.params;

  if (!logsArray[index]) {
    res.redirect("/*");
  } else {
    res.status(200).json(logsArray[index]);
  }
});

// Update a log
router.put("/:index", (req, res) => {
  let index = req.params.index;

  let foundData = logsArray[index];

  if (!foundData) {
    res.redirect("/*");
  } else {
    logsArray.splice(index, 1, req.body);

    res.status(200).json(req.body);
  }
});

// Delete a log by index
router.delete("/:index", (req, res) => {
  const index = Number(req.params.index);

  const selectedItem = logsArray[index];

  if (!selectedItem) {
    res.redirect("/*");
  } else {
    logsArray.splice(index, 1);

    res.status(200).json(logsArray);
  }
});

module.exports = router;
