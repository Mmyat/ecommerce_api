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
app.use('/api',require('./routes/user'))
app.use('/api',require('./routes/item'))
app.use('/api',require('./routes/cart'))
app.use('/api',require('./routes/order'))
app.listen(Port,(err)=>{
    if (err){
        console.log(err);
    }
    console.log("Server is listening at http://localhost:"+Port);
})