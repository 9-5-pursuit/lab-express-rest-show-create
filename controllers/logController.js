const express = require("express");
const router = express.Router();

let logArray = require("../models/log");

router.get("/", (req, res) => {
  res.json(logArray);
});

router.post("/", (req, res) => {
  const {
    captainName,
    daysSinceLastCrisis,
    mistakesWereMadeToday,
    post,
    title,
  } = req.body;

  const newLogEntry = {
    captainName: captainName,
    title: title,
    post: post,
    mistakesWereMadeToday: mistakesWereMadeToday,
    daysSinceLastCrisis: daysSinceLastCrisis,
  };

  logArray.push(newLogEntry);

  res.status(201).json(logArray);
});

// router.post("/", (req, res) => {

// })

router.get("/:arrayIndex", (req, res) => {
  let { arrayIndex } = req.params;

  if (logArray.length - 1 < arrayIndex) {
    res.redirect("/logs");
  } else {
    res.json(logArray[arrayIndex]);
  }
});

// From Class explanation:

// router.get("/:arrayIndex", (req, res) => {
//   let { arrayIndex } = req.params;

//   if (!logArray[arrayIndex]) {
//     res.redirect("/*")
//   } else {
//     res.json(logArray[arrayIndex]);
//   }
// });

router.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;

  if (logArray.length - 1 < arrayIndex) {
    res.status(404).send("invalid index");
  } else {
    logArray.splice(arrayIndex, 1);

    res.json(logArray);
  }
});
module.exports = router;
