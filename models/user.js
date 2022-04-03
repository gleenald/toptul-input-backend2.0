//import mongoose
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Username: {
        type: String, 
        required: true
    },
    Password: {
        type: String, 
        required: true
    }
})

exports.User = mongoose.model('User', UserSchema)