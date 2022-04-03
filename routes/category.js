//import express
const express = require('express');
const router = express.Router();

//import mongoose
const mongoose = require('mongoose');

//import models
const { Category } = require('./../models/category');



//get all category
router.get('/', async (req, res) => {
    const category = await Category.find({}, { __v: 0 });
    res.status(200).send({ message: 'you have successfully get all category data!', data: category })
})

//post new category
router.post('/', async (req, res) => {
    const category = new Category({
        Name: req.body.Name
    })

    saveCategory = await category.save()

    return res.status(200).send({
        message: 'you have successfully post new category data!',
        data: saveCategory
    })
})

//update category
router.put('/:id', async (req, res) => {
    const updateCategory = await Category.findByIdAndUpdate(req.params.id, {
        Name: req.body.Name
    });

    const result = await Category.findById(req.params.id);

    return res.status(200).send({
        message: "you have successfully update specific category",
        data: result
    })
})

//delete category
router.delete('/:id', async (req, res) => {
    const deleteCategory = await Category.findByIdAndRemove(req.params.id);

    return res.status(200).send({
        message: "you have successfully delete category document"
    })
})

module.exports = router;