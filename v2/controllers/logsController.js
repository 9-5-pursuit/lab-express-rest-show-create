const express = require("express");
const router = express.Router();

let logArray = require("../models/logs");

function redirect() {
  console.log("hi");
}

router.get("/", (req, res) => {
  res.json(logArray);
});

router.get("/:index", (req, res) => {
  let { index } = req.params;

  if (logArray.length - 1 < index) {
    res.redirect("/v2/logs");
  } else {
    res.send(`
    <h1>${logArray[index].title}</h1><h2>Captain Name: ${logArray[index].captainName}</h2>
    <p><strong>Post: </strong>${logArray[index].post}</p>
    <p><strong>Mistakes Made: </strong> ${logArray[index].mistakesWereMadeToday}</p>
    <p><strong>Days Since Last Crisis: </strong>${logArray[index].daysSinceLastCrisis}</p>
    <button>Go Back To Logs</button>`);
  }
});

module.exports = router;
