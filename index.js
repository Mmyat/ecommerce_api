const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const Port = 8080;
app.use(cors())
app.use(express.json())//z9sUTVdXKfbZREAQ
app.use((err,req,res,next)=>{
  console.log(err);
  res.status(500).json({
    status : 500,
    message : err.message,
})
})
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});
app.use('/api/users',require('./routes/user'))
app.use('/api/products',require('./routes/products'))
app.use('/api/cart',require('./routes/cart'))
app.listen(Port,(err)=>{
    if (err){
        console.log(err);
    }
    console.log("Server is listening at http://localhost:"+Port);
})