const express = require("express");
const router = express.Router();

let logsArray = require("../models/logs");

router.get("/", (req, res) => {
  res.send(logsArray);
});

router.get("/:id", (req, res) => {
  const index = +req.params.id;

  if (!(index in logsArray)) {
    res.redirect("/logs");
  } else {
    res.json(logsArray[index]);
  }
});

router.post("/", (req, res) => {
  const newLog = req.body;

  if (!newLog) {
    res.redirect("/logs");
  } else {
    logsArray.push(newLog);
    res.json(newLog);
  }
});

router.delete("/:id", (req, res) => {
  const index = +req.params.id;

  if (!(index in logsArray)) {
    res.redirect("/logs");
  } else {
    logsArray.splice(index, 1);
    res.json(logsArray);
  }
});

router.put("/:id", (req, res) => {
  const index = +req.params.id;

  if (!(index in logsArray)) {
    res.redirect("/");
  } else {
    logsArray.splice(index, 1, req.body);
    res.json(logsArray);
  }
});

module.exports = router;