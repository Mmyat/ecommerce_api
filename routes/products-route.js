const express = require('express')
const router = express.Router()
const Products = require('../models/products')
router.use(express.json())

//http://localhost:8080/api/products/
router.get('/',async(req,res)=>{
    try {
        const search = req.query.search
        const filter = {}
        if (search){
            filter["text"] = {$search : search};
        }
        const productData = await Products.find()
        res.json({
            status : 200,
            message : "process success",
            data : productData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status : 404,
            message : error.message,
        })
    }
})

router.get(':id',async(req,res)=>{
    try {
        const {id} = req.body;
        const productData = await Products.findById(id)
        if (!productData){
            return res.status(404).json(
                {
                    status : 404,
                    message : error.message,   
                }
            )
        }
        else{
            res.json({
                status : 200,
                message : "process success",
                data : productData
            })
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({
            status : 404,
            message : error.message,
        })
    }
})

//http://localhost:8080/api/products/
router.post('/',async(req,res,next)=>{
    try {
        const {code,name,description,price} = req.body;
        const products = new Products({code,name,description,price})
        await products.save();
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