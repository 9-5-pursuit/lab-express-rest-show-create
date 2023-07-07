const express = require("express")
const router = express.Router()

const logs = require("../models/log")




router.get("/",(req,res)=>{
    res.json(logs)
})

router.get("/:index", (req, res)=>{
    const { index } = req.params

    if(!logs[index]){
        res.redirect("/*");
    }else{
        res.json(logs[index])
    }
})

router.post("/",(req,res)=>{
    const newLog = req.body;
    if(!newLog){
        res
        .status(404)
        .json({status: false, message: "you cannot create an empty log"});
    } else{
           logs.push(newLog);

           res.json(logs)
    
    }

    // logs.push(newLog)
    
    // res.status(201).json({status: true, data: newTodo})

})

router.delete("/:index", (req, res) => {
    const index = Number(req.params.index);
  
    const selectedItem = logs[index];
  
    if (!selectedItem) {
      res.status(404).json({ status: false, message: "invalid item index" });
    } else {
      logs.splice(index, 1);
  
      res.json(logs);
    }
  });

  router.put(":/index", (req, res)=> {
    let index = req.params.index;

    let foundData = logsData[index]

    if(!foundData){
        res.redirect("/");

    }else{
        logsData.splice(index, 1, req.body);

        res.send(req.body)
    }
  })


module.exports=router