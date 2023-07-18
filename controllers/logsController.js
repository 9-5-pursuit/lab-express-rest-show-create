const express = require("express");
const logRoute = express.Router();
const data = require("../models/log.js");

// get Route

logRoute.get("/", (req, res) => {
  res.json(data);
});

// get Route by :id

logRoute.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const index = parseInt(arrayIndex);

  if (index >= 0 && index < data.length) {
    const user = data[index];
    res.json(user);
  } else {
    res.status(302).json({ message: "User not found" });
  }
});

// create Post route
logRoute.post("/", (req, res) => {
  const {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  } = req.body;

  if (
    !captainName ||
    !title ||
    !post ||
    !mistakesWereMadeToday ||
    !daysSinceLastCrisis
  ) {
    return res.status(400).json({
      status: false,
      message: "You cannot create an empty item",
    });
  }

  const newItem = {
    captainName,
    title,
    post,
    mistakesWereMadeToday,
    daysSinceLastCrisis,
  };

  data.push(newItem);

  res.status(201).json({ status: true, data: newItem });
});

//delete route
logRoute.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;

  const index = parseInt(arrayIndex);

  // extra error handle
  if (index === NaN || index >= data.length || index < 0) {
    return res.status(303).json({ message: "Item not found" });
  }

  // Remove the item from the data array using splice
  data.splice(index, 1);

  res.json({ message: "Item deleted successfully" });
});

module.exports = logRoute;
