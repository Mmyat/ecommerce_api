const express = require('express')
const User = require('../models/user')
const users = require("../controller/usercontroller");
const router = new express.Router()

//User signup
router.post('/register',users.registerUser)
//User login
router.post('/login',users.login)

module.exports = router