const express = require('express')
const Item = require('../models/item')
const Auth = require('../middleware/auth')

const router = new express.Router()

//fetch all items
router.get('/items', Auth, async(req, res) => {
  
    if(req.query.user == 1) {
        try {
           const items = await Item.find({ owner: req.user._id})
            res.status(200).send(items)
        } catch (error) {
            console.log(error)
            res.status(500).send('something went wrong')
        }
    } else {
    try {
        const items = await Item.find({})
        res.status(200).send(items)
    } catch (error) {
        res.status(400).send(error)
    }
}
})

//fetch an item
router.get('/items/:id', Auth, async(req, res) => {
    try{
        const item = await Item.findOne({_id: req.params.id})
        if(!item) {
            res.status(404).send({error: "Item not found"})
        }
        res.status(200).send(item) 
    } catch (error) {
        res.status(400).send(error)
    }
})

//create an item
router.post('/items',Auth, async(req, res) => {
    try {
        const owner = req.user._id
        const {name,description,category,price} = req.body;
        const newItem = new Item({owner,name,description,category,price})
        // console.log(owner)
        await newItem.save()
        res.status(201).send(newItem)
    } catch (error) {
        // console.log({error})
        res.status(400).send({message: "error"})
    }
})

//update an item
router.put('/items/:id', Auth, async(req, res) => {
    try {
        const itemId = req.params.id;
        const updateItem = req.body;
        const item = await Item.findByIdAndUpdate(itemId,updateItem,{new:true})
        console.log(item);
        console.log(updateItem);
        if(!item){
            return res.status(404).send()
        }
        await item.save()
        res.send(item)
    } catch (error) {
        res.status(400).send(error)
    }
})

//delete item
router.delete('/items/:id', Auth, async(req, res) => {
    try {
        const deletedItem = await Item.findOneAndDelete( {_id: req.params.id} )
        if(!deletedItem) {
            res.status(404).send({error: "Item not found"})
        }
        res.send(deletedItem)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router