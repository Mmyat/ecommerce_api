const express = require('express')
const items = require("../controller/itemcontroller");
const { uploadMiddleware } = require('../middleware/imageupload')
const router = new express.Router()
//
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: './public/itemImages',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
const upload = multer({ storage: storage });

//fetch all items
router.get('/',items.getAllItem)

//fetch an item
router.get('/:id',items.getItemById)

//create an item
router.post('/',upload.single('image'),items.createItem)

//update an item
router.put('/:id',items.updateItem)

//delete item
router.delete('/:id',items.deleteItem)

module.exports = router