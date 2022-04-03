//import express
const express = require('express');
const router = express.Router();

//import mongoose
const mongoose = require('mongoose');

//import models
const { Item } = require('./../models/item');
const { Category } = require('./../models/category');
const { Detail } = require('./../models/detail');


//get all item
router.get('/', async (req, res) => {
    const item = await Item.find({}, { __v: 0 })
    res.status(200).send({ message: 'you have successfully get all item data!', data: item })
})

//get specific item by name
router.get('/:name', async (req, res) => {
    const item = await Item.find({ Name: req.params.name })

    return res.status(200).send({
        message: 'you have successfully get specific item by name',
        data: item
    })
})

//post new item
router.post('/', async (req, res) => {

    //1. create new detail document
    const detail = new Detail({
        Detail: req.body.Detail
    })

    saveDetail = await detail.save()
    console.log('you have successfully save detail in detail collection !')

    //2. create new item document
    const item = new Item({
        Name: req.body.Name,
        Description: req.body.Description,
        ItemNo: req.body.ItemNo,
        Category: req.body.Category,//minta object id category
        Detail: saveDetail._id
    })

    saveItem = await item.save();

    const find_category = await Category.findById(req.body.Category);
    const find_detail = await Detail.findById(saveDetail._id);

    console.log('you have successfully save item in item collection !');

    return res.status(200).send({
        message: "you have successfully post new item data!",
        data: {
            _id: saveItem._id,
            Name: saveItem.Name,
            Description: saveItem.Description,
            ItemNo: saveItem.ItemNo,
            Category: find_category,
            Detail: find_detail.Detail
        }
    })

})

//update item
router.put('/:IdDetail/:IdItem', async (req, res) => {
    //1. update detail
    const updateDetail = await Detail.findByIdAndUpdate(req.params.IdDetail, {
        Detail: req.body.Detail
    })
    //2. update item
    const updateItem = await Item.findByIdAndUpdate(req.params.IdItem, {
        Name: req.body.Name,
        Description: req.body.Description,
        ItemNo: req.body.ItemNo,
        Category: req.body.Category,//minta objek id category
        Detail: req.params.IdDetail
    })

    //3. find document
    const result = await Item.findById(req.params.IdItem);

    const find_category = await Category.findById(result.Category);
    const find_detail = await Detail.findById(result.Detail);

    return res.status(200).send({
        message: "you have successfully update item data!",
        data: {
            _id: result.IdItem,
            Name: result.Name,
            Description: result.Description,
            ItemNo: result.ItemNo,
            Category: find_category,
            Detail: find_detail
        }
    })
})

//delete item
router.delete('/:IdDetail/:IdItem', async (req, res) => {
    const deleteDetail = await Detail.findByIdAndRemove(req.params.IdDetail);
    const deleteItem = await Item.findByIdAndRemove(req.params.IdItem);

    return res.status(200).send({
        message: "you have successfully delete detail document and item document"
    })
})

module.exports = router;