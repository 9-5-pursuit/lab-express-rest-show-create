const express = require("express");
const router = express.Router();
const logsArray = require("../models/log");

// GET - INDEX
router.get("/", (req, res) => {
  res.json(logsArray);
});

// GET - SHOW
router.get("/:index", (req, res) => {
  const { index } = req.params;

  if (!logsArray[index]) {
    res.status(404).redirect("/logs");
  } else {
    res.json(logsArray[index]);
  }
});

// POST - CREATE
router.post("/", (req, res) => {
  const newLog = req.body;

  if (!newLog) {
    res.send("Log Empty: Please create a new log.");
  } else {
    logsArray.push(newLog);
    res.json(logsArray);
  }
});

// DELETE
router.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (!logsArray[index]) {
    res.status(404).json({ status: false, message: "Invalid Log Index" });
  } else {
    let deletedLog = logsArray.splice(index, 1);
    res.status(200).json(logsArray);
  }
});

// PUT - UPDATE
router.put("/:index", (req, res) => {
  const { index } = req.params;
  if (!logsArray[index]) {
    res.status(404).redirect("/logs");
  } else {
    logsArray[index] = req.body;
    res.status(200).json(logsArray[index]);
  }
});

module.exports = router;
