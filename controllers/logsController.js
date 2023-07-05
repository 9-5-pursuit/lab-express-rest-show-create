const express = require("express");
const router = express.Router();

//Bring in the logs data
//make this variable a LET so that i could be changed when needed
let logsArray = require("../models/log");

//Get a list (or index) of all logs
router.get("/", (req, res) => {
  // console.log(logsArray);
  res.send(logsArray);
});

//Get an individual view (show one log by index)
router.get("/:index", (req, res) => {
  const { index } = req.params;
  // console.log(index);
  if (!logsArray[index]) {
    res.redirect("/*");
  } else {
    res.json(logsArray[index]);
  }
});

//Create a new log
router.post("/", (req, res) => {
  const newLog = req.body;
  if (!newLog) {
    res.send("cannot create empty lod");
  } else {
    logsArray.push(newLog);
    res.json(logsArray);
  }
});

module.exports = router;
