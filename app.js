// DEPENDENCIES
const express = require("express");
//morgan is middleware that displays the requests log in terminal
//needs to be installed
const morgan = require("morgan");

const logsController = require("./controllers/logsController");

// CONFIGURATION
const app = express();
//Teaches app to read incoming json data
app.use(express.json());
app.use(morgan("dev"));

//adds logs prefix to all routes in controller
app.use("/logs", logsController);

// ROUTES
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the captain's log" });
});

// EXPORT
module.exports = app;
