const express = require('express')
const items = require("../controller/itemcontroller");
const isAdmin = require('../middleware/isAdmin')
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
router.post('/',isAdmin,upload.single('file'),items.createItem)

//update an item
router.put('/:id',isAdmin,items.updateItem)

//delete item
router.delete('/:id',isAdmin,items.deleteItem)

module.exports = router