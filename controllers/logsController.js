const express = require("express");
const router = express.Router();

//Bring in the logs data
//make this variable a LET so that i could be changed when needed
let logsArray = require("../models/log");

//Get a list (or index) of all logs
router.get("/", (req, res) => {
  // console.log(logsArray);
  res.send(logsArray);
});

//Get an individual view (show one log by index)
router.get("/:index", (req, res) => {
  const { index } = req.params;
  // console.log(index);
  if (!logsArray[index]) {
    res.redirect("/*");
  } else {
    res.json(logsArray[index]);
  }
});

//Create a new log
router.post("/", (req, res) => {
  const newLog = req.body;
  if (!newLog) {
    res.send("cannot create empty lod");
  } else {
    logsArray.push(newLog);
    res.json(logsArray);
  }
});

//Delete a log by index
// Define a DELETE request endpoint at "/:index"
router.delete("/:index", ({ params }, res) => {
  const { index } = params; // Extract the value of "index" from the request parameters
  const selectedItem = logsArray[index]; // Access the log item in the logsArray based on the provided index

  if (!selectedItem) {
    // If the selected item does not exist (invalid index)
    res.status(404).json({ status: false, message: "invalid index" }); // Respond with a 404 status code and an error message
  } else {
    logsArray.splice(index, 1); // Remove the log item from logsArray using the splice method

    res.json(logsArray); // Respond with the updated logsArray
  }
});

module.exports = router;
