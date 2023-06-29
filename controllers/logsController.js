const express = require("express");
const router = express.Router();

let logsArray = require("../models/log");

// GET - logs
router.get("/", (req, res) => {
  res.status(200).json(logsArray);
});

// GET - individual log
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (id < 0 || id > logsArray.length) {
    res.redirect("/logs");
  } else {
    res.status(200).json(logsArray[id]);
  }
});

// POST - new log
router.post("/", (req, res) => {
  const newLog = req.body;

  if (!newLog) {
    res.redirect("/logs");
  } else {
    logsArray.push(newLog);
    res.status(200).json(logsArray[logsArray.length - 1]);
  }
});

// DELETE - destroy log
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (id < 0 || id > logsArray.length) {
    res.redirect("/logs");
  } else {
    logsArray.splice(id, 1);
    res.status(200).json(logsArray);
  }
});

// PUT - update log
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (id < 0 || id > logsArray.length) {
    res.redirect("/logs");
  } else {
    logsArray.splice(logsArray[id], 1, req.body);
    res.status(200).json(logsArray);
  }
});

module.exports = router;
