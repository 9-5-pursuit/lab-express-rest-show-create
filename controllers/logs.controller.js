const express = require("express");
const router = express.Router();
let logsModel = require("../models/logs.model");

router.get("/", (req, res) => {
  res.json(logsModel);
});

module.exports = router;
