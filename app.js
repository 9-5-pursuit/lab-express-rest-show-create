//DEPENDENCIES
const express = require("express");
//here we are bringing in express

//CONFIGURATION
const app = express();
//here we are calling the express function and assigning it to the variable app

//ROUTES
app.get("/", (req, res) => {
  res.send("welcome to the captain's log");
});

//ERROR HANDLING
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});

//EXPORT
module.exports = app;
