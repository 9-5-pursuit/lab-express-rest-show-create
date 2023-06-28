const express = require("express");
const router = express.Router();

const logsArray = require("../models/log");

router.get("/", (req, res) => {
  res.json(logsArray);
});

router.get("/:index", (req, res) => {
  const { index } = req.params;

  if (logsArray[index]) {
    res.json(logsArray[index]);
  } else {
    res.redirect("/*");
  }
});

router.post("/", (req, res) => {
  //   console.log(req.body);

  logsArray.push(req.body);
  res.json(logsArray[logsArray.length - 1]);
});

router.delete("/:index", (req, res) => {
  const { index } = req.params;

  if (logsArray[index]) {
    const removed = logsArray.splice(index, 1);
    res.json(removed);
  } else {
    res.redirect("/*");
  }
});

module.exports = router;
