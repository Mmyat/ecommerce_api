const express = require('express')
const Item = require('../models/item')
const items = require("../controller/itemcontroller");
const router = new express.Router()

//fetch all items
router.get('/',items.getAllItem)

//fetch an item
router.get('/:id',items.getItemById)

//create an item
router.post('/',items.createItem)

//update an item
router.put('/:id',items.updateItem)

//delete item
router.delete('/:id',items.deleteItem)

module.exports = router