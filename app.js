const express = require("express"); 
// const morgan = require("morgan")
// const cors = require("cors") 



const logController = require("./controllers/logController")


const app = express();

app.use(express.json())


app.use("/logs", logController)

app.get("/", (req,res)=>{ 
    res.send("welcome to the captain's log")
})

app.use("*",(req, res)=>{
    res.status(404).send("sorry, no page found")
})




module.exports=app