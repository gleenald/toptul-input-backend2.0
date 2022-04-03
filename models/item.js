//import mongoose
const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: [{
        type: String,
        required: true
    }],
    ItemNo: {
        type: String,
        required: true
    },
    Category: {
        type: mongoose.ObjectId,
        required: true
    },
    Detail: {
        type: mongoose.ObjectId,
        required: true
    }
})


exports.Item = mongoose.model('Item', ItemSchema)