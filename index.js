const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const Auth = require('./middleware/auth')
let userRouter = require('./routes/user');
let itemRouter = require('./routes/item');
let cartRouter = require('./routes/cart');
let orderRouter = require('./routes/order');
const Port = 8080;
app.use(cors())
app.use(express.json())

//Error handler
app.use((err,req,res,next)=>{
  console.log(err);
  res.status(500).json({
    status : 500,
    message : err.message,
  })
})

//Database Connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
});

//Route path
app.use('/api/users',userRouter)
app.use('/api/items',Auth,itemRouter)
app.use('/api/cart',Auth,cartRouter)
app.use('/api/orders',Auth,orderRouter)
app.listen(Port,(err)=>{
    if (err){
        console.log(err);
    }
    console.log("Server is listening at http://localhost:"+Port);
})