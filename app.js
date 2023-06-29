const express = require("express");
const morgan = require("morgan");

let logs = require("./models/log");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

app.get("/logs", (req, res) => {
  res.json(logs);
});

//get by ID
app.get("/logs/:arrayIndex", (req, res) => {
  //console.log(req.params);
  const userIndex = Number(req.params.arrayIndex);
  //console.log(userIndex);
  //console.log(logs.length);
  if (userIndex > logs.length) {
    // console.log("Condition met");
    res.redirect("*");
  } else {
    const selectItem = logs[userIndex];
    res.status(200).json(selectItem);
  }

  //sends corresponding log when a valid index is given
  //sends a redirect when an invalid index is given
});

app.post("/logs", (req, res) => {
  //adds new log to end of logs array
  if (!req.body) {
    res
      .status(400)
      .json({ status: false, message: "You cannot create an empty log" });
  } else {
    const newObj = {
      captainName: req.body.captainName,
      title: req.body.title,
      post: req.body.post,
      mistakesWereMadeToday: req.body.mistakesWereMadeToday,
      daysSinceLastCrisis: req.body.daysSinceLastCrisis,
    };
    logs.push(newObj);
    res.status(200).json({ status: true, data: newObj });
  }
});

//Update by ID
app.put("/logs/:arrayIndex", (req, res) => {
  //Resplaces the index in the logs array aka update
  const userIndex = Number(req.params.arrayIndex);
  if (userIndex === NaN || userIndex > logs.length - 1) {
    res.status(404).send("Invalid Input");
  } else {
    logs.splice(userIndex, 1, req.body);
    res.status(200).json(logs);
  }
});
//delete by ID
app.delete("/logs/:arrayIndex", (req, res) => {
  //deletes an item from the array at the index given
  const userIndex = Number(req.params.arrayIndex);
  const selectItem = logs[userIndex];
  if (!selectItem) {
    res.status(404).json({ status: false, message: "Invalid item index" });
  } else {
    logs.splice(userIndex, 1);
    //logs.slice(userIndex, userIndex + 1);
    res.status(200).json(logs);
  }
});

app.get("*", (req, res) => {
  res.status(404).send("404 Page not found");
});
module.exports = app;
