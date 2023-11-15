const express = require("express");
const Cart = require("../models/cart");
const carts = require("../controller/cartcontroller");
const Item = require("../models/item");
const router = new express.Router();

//get cart items
router.get("/",carts.getCartItem);

//add cart
router.post("/",carts.addToCart);

//delete item in cart
router.delete("/",carts.deleteCartItem);

module.exports = router;
