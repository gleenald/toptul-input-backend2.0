//import express
const express = require('express');
const router = express.Router();

//import mongoose
const mongoose = require('mongoose');

//import models
const { Item } = require('./../models/item');


//get all item
router.get('/', async (req, res) => {
    const item = await Item.find({}, { __v: 0 })
    res.status(200).send({ message: 'you have successfully get all item data!', data: item })
})

//post new item
router.post('/', async (req, res) => {
    const item = new Item({
        Name: req.body.Name,
        Description: req.body.Description,
        Id: req.body.Id
    })

    saveItem = await item.save()

    return res.status(200).send({
        message: "you have successfully post new item data!",
        data: saveItem
    })
})

//update item

module.exports = router;