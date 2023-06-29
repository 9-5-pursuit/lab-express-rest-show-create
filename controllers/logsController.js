const express = require("express");
const router = express.Router();

const logsArray = require("../models/logModel");

router.get("/", (req, res) => {
  res.send(logsArray);
});
router.get("/:index", (req, res) => {
  const { index } = req.params;

  if (logsArray[index]) {
    res.json(logsArray[index])
  } else {
    res.redirect('/*')
  }
});

module.exports = router;