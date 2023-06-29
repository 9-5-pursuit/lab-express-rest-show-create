const express = require("express");
const router = express.Router();

let logsArray = require("../models/log");

router.get("/logs", (req, res) => {
  res.json(logsArray);
});

router.get("/logs-by-name/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  console.log(name);
  let foundLog = null;

  logsArray.forEach((item) => {
    if (item.captainName.toLowerCase() === name) {
      foundLog = item;
      console.log(foundLog);
    }
  });

  if (!foundLog) {
    res.status(404).send("Log not found!");
  } else {
    res.send(foundLog);
  }
});

router.post("/add-new-log-by-name", (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send("you did not provide any data! please try again");
  } else {
    const body = req.body;
    logsArray.push(body);

    res.json(logsArray);
  }
});

router.get("/logs/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;

  if (arrayIndex > logsArray.length - 1) {
    res.send(`Please choose a number lower than ${arrayIndex.length}`);
  } else {
    res.json(logsArray[arrayIndex]);
  }
});

module.exports = router;
