const express = require("express");
const router = express.Router();

//Bring in the logs data
//make this variable a LET so that i could be changed when needed
let logsArray = require("../models/log");

//Get a list (or index) of all logs
// Define a GET request endpoint at "/"
router.get("/", (req, res) => {
  // console.log(logsArray);
  res.send(logsArray); // Send the logsArray as the response
});

//Get an individual view (show one log by index)
// Define a GET request endpoint at "/:index"
router.get("/:index", (req, res) => {
  const { index } = req.params; // Extract the value of "index" from the request parameters

  if (!logsArray[index]) {
    // If the log item at the specified index does not exist
    res.redirect("/*"); // Redirect to another route or page (denoted by "/*" here)
  } else {
    res.json(logsArray[index]); // Respond with the log item at the specified index as JSON
  }
});

//Create a new log
// Define a POST request endpoint at "/"
router.post("/", (req, res) => {
  const newLog = req.body; // Extract the log data from the request body

  if (!newLog) {
    // If the newLog is empty or not provided
    res.send("cannot create empty log"); // Respond with an error message
  } else {
    logsArray.push(newLog); // Add the new log to the logsArray
    res.json(logsArray); // Respond with the updated logsArray
  }
});

//Delete a log by index
// Define a DELETE request endpoint at "/:index"
router.delete("/:index", (req, res) => {
  const index = Number(req.params.index); // Extract the value of "index" from the request parameters
  const selectedItem = logsArray[index]; // Access the log item in the logsArray based on the provided index

  if (!selectedItem) {
    // If the selected item does not exist (invalid index)
    res.status(404).json({ status: false, message: "invalid index" }); // Respond with a 404 status code and an error message
  } else {
    logsArray.splice(index, 1); // Remove the log item from logsArray using the splice method

    res.json(selectedItem); // Respond with the updated logsArray
  }
});

//Update a log
// Define a PUT request endpoint at "/:index"
router.put("/:index", (req, res) => {
  let { index } = req.params; // Extract the value of "index" from the request parameters

  let foundData = logsData[index]; // Access the log data in the logsData array based on the provided index

  if (!foundData) {
    // If the log data at the specified index does not exist
    res.redirect("/"); // Redirect to another route or page (in this case, the root route "/")
  } else {
    logsData.splice(index, 1, req.body); // Replace the log data at the specified index with the updated log data from the request body

    res.send(req.body); // Send the updated log data as the response
  }
});

module.exports = router;
