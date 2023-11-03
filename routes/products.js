const express = require('express')
const router = express.Router()
const Products = require('../models/products')
router.use(express.json())

//http://localhost:8080/api/products/
router.post('/',async(req,res,next)=>{
    try {
        const {name,description,category,price} = req.body;
        const products = new Products({name,description,category,price})
        await products.save();
        res.status(201).json({message:"Created Sucessfully"})
    } catch (err) {
        next(err)
    }
})

//http://localhost:8080/api/products/
router.get('/',async(req,res,next)=>{
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
    } catch (err) {
        next(err)
    }
})

const getProductById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const productData = await Products.findById(id)
        if (!productData){
            return res.status(404).json(
                {
                    status : 404,
                    message : err.message,   
                }
            )
        }
        req.product= productData
        next();
    } 
    catch (err) {
        next(err)
    }
}
//http://localhost:8080/api/products/${id}
router.get('/:id',getProductById,async(req,res)=>{
    res.json({
        status : 200,
        message : "Process success",
        data : req.product
    })
})

//http://localhost:8080/api/products/${id}
router.put('/:id',getProductById,async(req,res,next)=>{
    try {
        const product = req.product
        const {name,description,category,price} = req.body;
        product.name = name
        product.description = description
        product.category=category
        product.price = price
        await product.save();
        res.json({
            status : 200,
            message : "Updated successfully",
            data : product
        })
    } 
    catch (err) {
        next(err)
    }
})

//http://localhost:8080/api/products/${id}
router.delete('/:id',getProductById,async(req,res,next)=>{
    try {
        const product = req.product
        await product.remove();
        res.json({
            status : 200,
            message : "Deleted successfully",
            data : product
        })
    } 
    catch (err) {
        next(err)
    }
})
module.exports = router;