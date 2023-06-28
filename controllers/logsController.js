const express = require("express");
const router = express.Router();
let logsArray = require("../models/log.js");
const log = require("../models/log.js");
router.get("/logs", (req, res) => {
    res.json(logsArray);
});
router.get("/logs/:id", (req, res) => {
    const { id } = req.params;

    if (!logsArray[id]) {
        res.status(404).redirect("/not-found");
    } else {
        res.json(logsArray[id]);
    }
});
router.post("/logs", (req, res) => {
    const newLog = req.body;
    if (!newLog) {
        res.status(400).json({
            status: false,
            message: "You cannot create an empty log",
        });
    } else {
        logsArray.push(newLog);

        res.status(201).json(logsArray);
    }
});
router.delete("/logs/:id", (req, res) => {
    const { id } = req.params;
    let foundIndex = logsArray[id];
    if (!foundIndex) {
        res.status(404).json({
            status: false,
            message: "sorry, no log with this ID found",
        });
    } else {
        logsArray.splice(id, 1);
        res.json(logsArray);
    }
});
router.put("/logs/:id", (req, res) => {
    res.send("testing");
    // const newLog = req.body;
    // const { id } = req.params;
    // let foundIndex = logsArray[id];
    // if (!foundIndex) {
    //     res.status(404).json({
    //         status: false,
    //         message: "sorry, no log with this ID found",
    //     });
    // } else {
    //     logsArray[id] = newLog;
    //     res.json(logsArray[id]);
    // }
});
router.get("/not-found", (req, res) => {
    res.send("Page not found.");
});
module.exports = router;
