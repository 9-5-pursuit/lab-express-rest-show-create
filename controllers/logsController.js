const express = require("express");
const router = express.Router();

let logsArray = require("../models/log");

router.get("/", (req, res) => {
  res.json(logsArray);
});

// ----  GET LOG BY NAME  ----- \\
// router.get("/logs-by-name/:name", (req, res) => {
//   const name = req.params.name.toLowerCase();
//   console.log(name);
//   let foundLog = null;

//   logsArray.forEach((item) => {
//     if (item.captainName.toLowerCase() === name) {
//       foundLog = item;
//     }
//   });

//   if (!foundLog) {
//     res.redirect("/*");
//   } else {
//     res.send(foundLog);
//   }
// });

// ----  GET LOG by index  ----- \\
router.get("/:index", (req, res) => {
  const { index } = req.params;

  //   if (arrayIndex > logsArray.length - 1) {
  //     res.send(`Please choose a number lower than ${arrayIndex.length}`);

  if (!logsArray[index]) {
    res.redirect("/*");
  } else {
    res.json(logsArray[index]);
  }
});

// ----  ADD NEW LOG BY NAME  ----- \\
// router.post("/add-new-log-by-name", (req, res) => {
//   if (Object.keys(req.body).length === 0) {
//     res.status(400).send("you did not provide any data! please try again");
//   } else {
//     const body = req.body;
//     logsArray.push(body);

//     res.json(logsArray);
//   }
// });

// ----  ADD NEW LOG by index  ----- \\
router.post("/", (req, res) => {
  const newLog = req.body;
  if (!newLog) {
    res.send("Cannot create empty log");
  } else {
    logsArray.push(newLog);
    res.json(logsArray);
  }
});

// ----  DELETE a LOG by index  ----- \\
router.delete("/:index", (req, res) => {
  const index = Number(req.params.index);

  const selectedLog = logsArray[index];

  if (!selectedLog) {
    res.status(404).json({ status: false, message: "invalid log index" });
  } else {
    logsArray.splice(index, 1);

    res.json(logsArray);
  }
});

router.put("/:index", (req, res) => {
  let index = Number(req.params.index);

  let foundData = logsArray[index];

  if (!foundData) {
    res.redirect("/*");
  } else {
    logsArray.splice(...logsArray[index], index, 1, req.body);

    res.send(logsArray);
  }
});

module.exports = router;
