//DEPENDENCIES
const express = require('express');
const router = express.Router();

let logData = require('../model/logsModel');

//ROUTES

// GET request when use reaches default page of logs
router.get('/', (req, res) => {
    res.json(logData);
})

//GET request of individual log when user types in log title -> localhost:3001/logs/"insert title here"
router.get('/:title', (req, res) => {
    let title = req.params.title;
    title = title.toLowerCase();


    let found = logData.find(item => {
        return item.title.toLowerCase() == title;
    })

    if(found == undefined){
        res.status(404).send("We coudn't find what you were looking for")
    }
    else{
        res.send(found);
    }

})

//POST request - creating a new log

router.post('/', (req, res) => {
    
    if(Object.keys(req.body).length == 0){
        res.status(404).send("Sorry it looks like you haven't filled out all of the log info, please try again");
    }
    else{
        logData.push(req.body);
        res.send(logData);
    }
    
    // res.send(req.body);
})

//DELETE request - delete a specific log

router.delete('/:title', (req, res) => {
    let { title } = req.params;
    title = title.toLowerCase();

    let foundIndex = logData.findIndex((item) => {
        return item.title.toLowerCase() === title
    })

    if(foundIndex == -1){
        res.status(404).send("Sorry we couldn't find the log you wanted to delete please try again.")
    }
    else{
        logData.splice(foundIndex, 1);
        res.send(logData);
    }
    
})

//PUT request - update a certain log

router.put('/:title', (req, res) => {
    let title = req.params.title;

    let foundIndex = logData.findIndex((item) => {
        return item.title.toLowerCase() == title.toLowerCase();
    })

    let foundObject = logData[foundIndex];

    let newObject = {
        ...foundObject,
        ...req.body
    }

    if(Object.keys(req.body).length <= 0){
        res.status(404).send("You need to provide some input to update the log!")
    }
    else{
        res.json({message: "success!", dataChanged: newObject});
    }
    
})

//EXPORT
module.exports = router;