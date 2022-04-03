//import express
const express = require('express');
const router = express.Router();

//import mongoose
const mongoose = require('mongoose');

//import models
const { User } = require('./../models/user');


//register new user
router.post('/register', async (req, res) => {
    const user = new User({
        Username: req.body.Username,
        Password: req.body.Password,
        IsSuperUser: req.body.IsSuperUser,
        Email: req.body.Email
    })

    saveUser = await user.save();

    return res.status(200).send({
        message: "you have successfully register new user",
        data: saveUser
    })
})

//login 
router.post('/login', async (req, res) => {
    const user = await User.find({ Username: req.body.Username, Password: req.body.Password })
    if (user.length == 0) {
        return res.status(404).send({
            message: "Wrong Username / Password, Please Try Again"
        })
    }
    if (user.length != 0) {
        return res.status(200).send({
            message: "you have successfully logged in",
            data: user
        })
    }


})

module.exports = router;