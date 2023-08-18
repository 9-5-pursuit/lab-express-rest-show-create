const express = require("express");
const router = express.Router();

const logsArray = require("../models/log");

router.get("/", (req, res) => {
res.send(logsArray)
}
)
router.get("/:id", (req, res) => {
    const { id } = req.params
    if(logsArray[id]){
        res.send(logsArray[id])
    } else 
    res.redirect("/*")
})

router.post("/", (req, res) => {
    const newLog = req.body;
    if (!newLog){
    res.send("cannot create empty log");
    }
    else{
        logsArray.push(newLog);
        res.json(logsArray)
    }
})

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)

    const selectedItem = logsArray[id];
    if (!selectedItem) {
        res.status(404).json({status:false, message: "invalid item index" });
    } else {
        logsArray.splice(id, 1);
        res.json(logsArray);
    }
})

router.put ("/:id", (req,res) => {
    let id = req.params.id;
    let foundData = logsData[id]

    if(!foundData) {
        res.redirect("/");
    } else { 
        logsData.splice(index, 1, req.body);
        res.send(req.body);
    }
})


module.exports = router;