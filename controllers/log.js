const express = require("express");
const router = express.Router();

let logsArray = require("../models/log");

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
  const index = Number(req.params.index);

  const selectedItem = logsArray[index];

  if (!selectedItem) {
    res.status(404).json({ status: false, message: "invalid item index" });
  } else {
    logsArray.splice(index, 1);

    res.json(logsArray);
  }
});

router.put("/:index", (req, res) => {
  let index = req.params.index;

  let foundData = logsArray[index];

  if (!foundData) {
    res.redirect("/");
  } else {
    logsArray.splice(index, 1, req.body);

    res.send(req.body);
  }
});

module.exports = router;
