const express = require("express");
const router = express.Router();

let logsArray = require("../models/log");

//get "/" all logs
router.get("/", (req, res) => {
  res.send(logsArray);
});

//get by index "/:index"
router.get("/:index", (req, res) => {

  const {index} = req.params;

  if (!logsArray[index]) {
    res.redirect("*");
  } else {
    res.json(logsArray[index]);
  }
});

//post "/" create new log
router.post("/", (req, res) => {
  const newPost = req.body;

  if (!newPost) {
    res.send("Can not create empty log");
  } else {
  logsArray.push(newPost);
  res.json(logsArray);
  }
});

//delete log by "/:index"
router.delete("/:index", (req, res) => {
  const index = req.params.index;

  const findItem = logsArray[index];

  if (!findItem) {
    res.redirect("*");
  } else {
    logsArray.splice(index, 1);
    res.json(logsArray);
  }
});

//update by log
router.put("/:index", (req, res) => {
  let index = req.params.index;
  let foundLog = logsArray[index];

  if (!foundLog) {
    res.redirect("*");
  } else {
    logsArray.splice(index, 1, req.body);
    res.send(req.body);
  }
});



module.exports = router;

