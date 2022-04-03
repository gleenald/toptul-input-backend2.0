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
    Id: {
        type: String,
        required: true
    }
})


exports.Item = mongoose.model('Item', ItemSchema)