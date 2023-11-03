const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require("jsonwebtoken")
router.use(express.json())
const bcrypt = require('bcrypt')
router.use(cors({credential:true,origin:"http://localhost:5173"}))
router.post('/register',async(req,res)=>{
   const {username,password} = req.body;
  try{ 
    const userDoc = await User.create({
    username,
    password : bcrypt.hashSync(password,salt)
   })
   res.json(userDoc);}
   catch(err){
    res.status(400).json(err)
   }
})
router.post('/login',async(req,res)=>{
   const {username,password} = req.body;
    const userDoc = await User.findOne({username})
    const loginSuccess=bcrypt.compareSync(password,userDoc.password)
   if (loginSuccess){
    jwt.sign({username,user_id:userDoc._id},process.env.JWT_KEY,{},
        (err,token)=>{
            if(err) throw err;
            res.cookie("token",token).json({
                username,
                user_id:userDoc._id
            })
        })

   }
   else{
    res.status(400).json("Wrong user credential")
   }
})