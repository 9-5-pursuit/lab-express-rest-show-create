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
  res.json(logsArray.length - 1);
});

module.exports = router;
