//import express
const express = require('express');
const router = express.Router();

//import mongoose
const mongoose = require('mongoose');

//import models
const { User } = require('./../models/user');

//get all user
router.get('/', async (req, res) => {
    res.status(200).send({ message: 'you have successfully get all user data!' })
})

//post new user
router.post('/', async (req, res) => {
    const user = new User({
        Username: req.body.Username,
        Password: req.body.Password
    })

    saveUser = await user.save()

    return res.status(200).send({
        message: "you have successfully post new user data!",
        data: saveUser
    })
})

module.exports = router;