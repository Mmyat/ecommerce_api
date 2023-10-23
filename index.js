const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
// const bcrypt = require('bcrypt')
const dotenv = require("dotenv").config()
// const jwt = require("jsonwebtoken")
// const User = require("./models/user")
const Port = 8080;
app.use(express.json())//z9sUTVdXKfbZREAQ
mongoose.connect(process.env.MONGO_URL)
app.use('/api/products',require('./routes/products-route'))
app.listen(Port,(err)=>{
    if (err){
        console.log(err);
    }
    console.log("Server is listening at http://localhost:"+Port);
})