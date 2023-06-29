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
  logsArray.push(req.body);
  res.status(201).json(logsArray.length - 1);
});

// DELETE
router.delete("/:index", (req, res) => {
  const { index } = req.params;
  if (!logsArray[index]) {
    res.status(404).redirect("/logs");
  } else {
    let deletedLog = logsArray.splice(index, 1);
    res.status(200).json(deletedLog);
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
