//import express
const express = require('express');
const router = express.Router();

//import mongoose
const mongoose = require('mongoose');

//import models
const { Detail } = require('./../models/detail');

//get
router.get('/', async (req, res) => {
    res.status(200).send({ message: 'you have successfully get detail item data!' })
})

//post new detail-item
router.post('/', async (req, res) => {
    const detail = new Detail({
        Detail: { first: "Amir", middle: "Umam", last: "Kahn" }
    })

    saveDetail = await detail.save();

    return res.status(200).send({
        message: "you have successfully post new item detail data!",
        data: saveDetail
    })
})

module.exports = router;