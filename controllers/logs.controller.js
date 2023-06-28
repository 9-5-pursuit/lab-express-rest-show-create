const express = require("express");
const router = express.Router();
let logsModel = require("../models/log");

router.get("/", (req, res) => {
  res.json(logsModel);
});

router.get("/:arrayIndex", (req, res) => {
    let arrayIndex = req.params.arrayIndex

    if (!logsModel[arrayIndex]) {
    res.redirect('http://localhost:3003/404')
    } else {
      res.json({ status: true, data: logsModel[arrayIndex] });
    }
});

router.post("/", (req, res) => {
    const log = req.body;
  
    if (!log) {
      res
        .status(400)
        .json({ status: false, message: "You cannot create an empty log" });
    } else {
      logsModel.push(log);

      res.json(logsModel)
    }
});

router.delete("/:arrayIndex", (req, res) => {
    const arrayIndex = req.params.arrayIndex;
  
    if (!logsModel[arrayIndex]) {
        res.redirect('http://localhost:3003/404')
    }  else {
      let foundLog = logsModel[arrayIndex];
  
      let newLogs = logsModel.filter((item) => {
        return (item !== foundLog)
      });
  
      logsModel = newLogs

      console.log(logsModel.length)
  
      res.json({
        status: true,
        message: "success",
        data: newLogs,
      });
    }
});

router.put("/:arrayIndex", (req, res) => {
    const arrayIndex = req.params.arrayIndex;
  
    if (!logsModel[arrayIndex]) {
        res.redirect('http://localhost:3003/404')
    } else {
      logsModel.splice(arrayIndex, 1, req.body);
      let foundLog = logsModel[arrayIndex];
      res.json({ message: "success", status: true, data: logsModel });
    }
  });

module.exports = router;
