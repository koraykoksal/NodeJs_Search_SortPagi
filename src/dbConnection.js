"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

const MONGODB = process.env.MONGODB || 'mongodb://127.0.0.1:27017/blogApi'
// mongoose.connect(MONGODB)

mongoose.connect(MONGODB)
    .then(() => console.log(' * DB Connected * '))
    .catch((err) => console.log(' * DB Not Connected * ', err))