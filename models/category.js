//import mongoose
const mongoose = require('mongoose');


const CategorySchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    }
})


exports.Category = mongoose.model('Category', CategorySchema)