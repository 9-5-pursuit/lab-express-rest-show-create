const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Welcome to the Captain's Log");
});

module.exports = router;
