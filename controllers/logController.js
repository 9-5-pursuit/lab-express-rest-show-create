const express = require("express");

const router = express.Router();

const logsArray = require("../models/log");

router.get("/", (req, res) => {
  res.send(logsArray);
});

router.get("/:index", (req, res) => {
  const { index } = req.params;

  if (!logsArray[index]) {
    res.redirect("/*");
  } else {
    res.json(logsArray[index]);
  }
});

router.post("/", (req, res) => {
  const newLog = req.body;

  if (!newLog) {
    res.send("cannot create empty log");
  } else {
    logsArray.push(newLog);
    res.json(logsArray);
  }
});

router.delete("/:index", (req, res) => {
  const { index } = req.params;
  const selectedLog = logsArray[index];

  if (!selectedLog) {
    res.status(404).json({ status: false, message: "Invalid item index" });
  } else {
    logsArray.splice(index, 1);
    res.json(logsArray);
  }
});
router.put("/:index", (req, res) => {
  const { index } = req.params;
  const selectedLog = logsArray[index];
 if (!selectedLog) {
    res.redirect("/");
 } else {
    logsArray.splice(index, 1, req.body);
    res.json(req.body);
 }

 
});
module.exports = router;
