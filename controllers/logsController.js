const express = require('express')
const logs = require('../models/log')
const router = express.Router()

router.get('/', (req,res) => {
    res.send(logs)
})

router.get('/:id', (req,res) => {
    if(!logs[req.params.id]){
        res.redirect('/logs')
    }
    res.send(logs[req.params.id])
})

router.post('/', (req,res) => {
    const newObj = req.body
    logs.push(newObj)
    res.send(logs)
})

router.delete('/:id', (req,res) => {
    if(!req.params.id){
        res.redirect('*')
    }
    logs.splice(req.params.id, 1)
    res.send(logs)
})

router.put('/:id', (req,res) => {
    if(!req.params.id){
        res.redirect('*')
    }
    logs[req.params.id] = req.body
    res.send(logs)
})

router.get('*', (req,res) => {
    res.status(404).send('Route not found')
})

module.exports = router