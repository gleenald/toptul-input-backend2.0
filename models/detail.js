//import mongoose
const mongoose = require('mongoose');

const DetailSchema = mongoose.Schema({
    Detail:{
        Key1: {
            type: String
        },
        Key2: {
            type: String
        },
        Key3: {
            type: String
        }
    }
}, { strict: false })

exports.Detail = mongoose.model('Detail', DetailSchema)