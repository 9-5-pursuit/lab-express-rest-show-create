const express = require("express");

const router = express.Router();

const logsArray = require("../models/log");

router.get("/", (req, res) => {
  res.send(logsArray);
});

router.get("/:index", (req, res) => {
  if (!logsArray[req.params.index]) {
    res.redirect("/*");
  } else {
    res.json(logsArray[req.params.index]);
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

router.put("/:index", (req, res) => {
  const selectedLog = logsArray[req.params.index];
  if (!selectedLog) {
    res.redirect("/");
  } else {
    logsArray.splice(req.params.index, 1, req.body);
    res.json(req.body);
  }
});

router.delete("/:index", (req, res) => {
  const selectedLog = logsArray[req.params.index];
  if (!selectedLog) {
    res.status(404).json({ status: false, message: "invalid index" });
  } else {
    logsArray.splice(req.params.index, 1);
    res.json(logsArray);
  }
});

module.exports = router;
