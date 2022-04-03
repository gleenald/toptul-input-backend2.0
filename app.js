//Import Express
const express = require('express');
const app = express();

//Import Mongoose
const mongoose = require('mongoose');

//Import dotenv
require('dotenv/config');

//Import router
const CategoryRoute = require('./routes/category');
const ItemRoute = require('./routes/item');
const UserRoute = require('./routes/user');

//midleware-bodyparser
app.use(express.json());

//midleware-router
app.use('/category', CategoryRoute);
app.use('/item', ItemRoute);
app.use('/user', UserRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to mongodb')
})

//listen port
app.listen(process.env.PORT, () => {
    console.log(`listen to port ${process.env.PORT}`)
})