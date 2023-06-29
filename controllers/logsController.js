const express = require("express");
const router = express.Router();

const logsArray = require("../models/log");

router.get("/", (req, res) => {
  res.send(logsArray);
});

module.exports = router;