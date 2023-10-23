const express = require('express')
const router = express.Router()
const Products = require('./products-route')
router.use(express.json())
//http://localhost:8080
router.get('/',(req,res)=>{
    res.json({message:"Hello Requester"})
})
router.post('/post',async(req,res,next)=>{
    try {
        const {code,name,price} = req.body;
        const products = new Products({code,name,price})
        products.save();
        res.status(201).json({message:"Created Sucessfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status : 500,
            message : error.message,
        })
    }
})
module.exports = router;