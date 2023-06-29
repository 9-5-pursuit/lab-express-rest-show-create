const express = require("express");
const router = express.Router();

let logsArray = require("../models/log");

router.get("/", (req, res) => {
  res.json(logsArray);
});

router.get("/logs", (req, res) => {
  const { mistakes, lastCrisis, order } = req.query;

  if (mistakes === "true") {
    const filteredLogsArray = logsArray.filter(
      (item) => item.mistakesWereMadeToday === true
    );
    res.json(filteredLogsArray);
  }

  if (mistakes === "false") {
    const filteredLogsArray = logsArray.filter(
      (item) => item.mistakesWereMadeToday === false
    );
    res.json(filteredLogsArray);
  }

  if (lastCrisis === "gt10") {
    const filteredLogsArray = logsArray.filter(
      (item) => item.daysSinceLastCrisis > 10
    );
    res.json(filteredLogsArray);
  }
  if (order === "asc") {
    logsArray.sort((a, b) => {
      const nameA = a.captainName.toLowerCase();
      const nameB = b.captainName.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      } else {
        return 0;
      }
    });
    res.json(logsArray);
  }
  if (order === "desc") {
    logsArray.sort((a, b) => {
      const nameA = a.captainName.toLowerCase();
      const nameB = b.captainName.toLowerCase();
      if (nameB > nameA) {
        return 1;
      }
      if (nameB < nameA) {
        return -1;
      } else {
        return 0;
      }
    });
    res.json(logsArray);
  } else {
    res.redirect("/*");
  }
});

router.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const convertedIndex = Number(arrayIndex);

  if (logsArray[convertedIndex]) {
    const foundLog = logsArray[convertedIndex];
    res.json(foundLog);
  } else {
    res.redirect("/*");
  }
});

function isValueValid(req, res, next) {
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = req.body;

  const status =
    typeof captainName === "string" &&
    typeof title === "string" &&
    typeof post === "string" &&
    typeof mistakesWereMadeToday === "boolean" &&
    typeof daysSinceLastCrisis === "number";

  if (!status) {
    res.send("Error! Wrong datatype entered.");
  } else {
    next();
  }
}

router.post("/", isValueValid, (req, res) => {
  logsArray.push(req.body);
  res.send(logsArray);
});

router.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const convertedIndex = Number(arrayIndex);
  if (logsArray[convertedIndex]) {
    logsArray.splice(convertedIndex, 1);
    res.send(logsArray);
  } else {
    res.redirect("/*");
  }
});

router.put("/:arrayIndex", isValueValid, (req, res) => {
  const { arrayIndex } = req.params;
  const convertedIndex = Number(arrayIndex);
  if (logsArray[convertedIndex]) {
    logsArray[convertedIndex] = req.body;
    res.send(logsArray);
  } else {
    res.redirect("/*");
  }
});

module.exports = router;
