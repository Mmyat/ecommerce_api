const express = require('express')
const items = require("../controller/itemcontroller");
const router = new express.Router()
//
const multer = require('multer');  
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//fetch all items
router.get('/',items.getAllItem)

//fetch an item
router.get('/:id',items.getItemById)

//create an item
router.post('/',upload.single('file'),items.createItem)

//update an item
router.put('/:id',items.updateItem)

//delete item
router.delete('/:id',items.deleteItem)

module.exports = router