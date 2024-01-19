const Item = require("../models/item");
const multer = require("multer");
const admin = require("firebase-admin");
const serviceAccount = require("../../Key/product-shop-43203-firebase-adminsdk-ppzcj-0fe0ee0d04.json");
const uuid = require("uuid-v4");
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://product-shop-43203-default-rtdb.firebaseio.com",
  storageBucket: "product-shop-43203.appspot.com",
});

const getAllItem = async (req, res, next) => {
  if (req.query.user == 1) {
    try {
      const items = Item ;
      res.status(200).send(items);
    } catch (error) {
      console.log(error);
      res.status(500).send("something went wrong");
    }
  } else {
    try {
      const items = await Item.find({});
      res.status(200).send(items);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
const getItemById = async (req, res, next) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    if (!item) {
      res.status(404).send({ error: "Item not found" });
    }
    res.status(200).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
};
const createItem = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    //Image Upload To Firebase
    const bucket = admin.storage().bucket();
    const fileBuffer = req.file.buffer;
    const uniqueFileName = `${Date.now()}_${req.file.originalname}`;
    const file = bucket.file(uniqueFileName);
    const token = uuid();
    const metadata = {
      metadata: {
        firebaseStorageDownloadTokens: token,
        contentType: req.file.mimetype,
      },
    };
    const fileStream = file.createWriteStream({
      metadata: metadata,
      gzip: true,
    });
    //Stream error Response
    fileStream.on("error", (err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
    //Stream success Response
    fileStream.on("finish", () => {
      res.status(201).send("Image Upload Successfully");
    });
    //Stream end
    fileStream.end(fileBuffer);
    //
    const owner = req.user._id;
    const imagefile = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${uniqueFileName}?alt=media&token=${token}`;
    const { name, description, category, price } = req.body;
    const newItem = new Item({
      owner,
      name,
      description,
      category,
      price,
      imagefile,
    });
    console.log(newItem);
    await newItem.save();
    res.status(201).send("New product is save successfully");
  } catch (error) {
    res.status(400).send({ message: "error" });
  }
};
const updateItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const updateItem = req.body;
    const item = await Item.findByIdAndUpdate(itemId, updateItem, {
      new: true,
    });
    console.log(item);
    console.log(updateItem);
    if (!item) {
      return res.status(404).send();
    }
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteItem = async (req, res, next) => {
  try {
    const deletedItem = await Item.findOneAndDelete({ _id: req.params.id });
    if (!deletedItem) {
      res.status(404).send({ error: "Item not found" });
    }
    res.send(deletedItem);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports = {
  getAllItem,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
