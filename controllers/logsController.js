const express = require("express");
const router = express.Router();

//Bring in the logs data
const logsArray = require("../models/log");

//Get a list (or index) of all logs
router.get("/", (req, res) => {
  console.log(logsArray);
  res.send(logsArray);
});

module.exports = router;
