const express = require("express");
const router = express.Router();

// Use two dots to leave the controllers folder and enter models
let logs = require("../models/log");

// GET all logs
router.get("/", (req, res) => {
  res.json(logs);
});

// POST a new log
router.post("/", (req, res) => {
  const {
    captainName,
    daysSinceLastCrisis,
    mistakesWereMadeToday,
    post,
    title,
  } = req.body;

  if (!post || !title) {
    res.redirect("/invalid-index");
  } else {
    const newLog = {
      captainName,
      daysSinceLastCrisis,
      mistakesWereMadeToday,
      post,
      title,
    };
    logs.push(newLog);
    res.status(303).json(logs);
  }
});

// GET a specific log by index
router.get("/:arrayIndex", (req, res) => {
  const arrayIndex = Number(req.params.arrayIndex);

  if (arrayIndex < 0 || arrayIndex >= logs.length) {
    res.redirect("/invalid-index");
  } else {
    const log = logs[arrayIndex];
    res.json(log);
  }
});

// Update a log
router.put("/:arrayIndex", (req, res) => {
  const arrayIndex = Number(req.params.arrayIndex);

  if (arrayIndex < 0 || arrayIndex >= logs.length) {
    res.redirect("/invalid-index");
  } else {
    const updatedLog = req.body;
    logs[arrayIndex] = updatedLog;
    res.status(303).json(logs);
  }
});

// Delete a log by index
router.delete("/:arrayIndex", (req, res) => {
  const arrayIndex = Number(req.params.arrayIndex);

  if (arrayIndex < 0 || arrayIndex >= logs.length) {
    res.redirect("/invalid-index");
  } else {
    logs.splice(arrayIndex, 1); // Remove the log at the specified index
    res.status(303).json(logs);
  }
});


router.get("/invalid-index", (req, res) => {
  res.status(404).json({ message: "Invalid Index" });
});

module.exports = router;
