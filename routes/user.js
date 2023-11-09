const express = require('express')
const User = require('../models/user')
const Auth = require('../middleware/auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = new express.Router()
const generateAuthToken=async (user) =>{
    // const user = this
    const token = jwt.sign({ _id: user._id.toString()}, process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({token})
     await user.save()
    return token
}

router.get('/',(req,res)=>{
    res.end(
        "Hello Test"
    )
})

// //signup
// router.post('/register', async (req, res) => {
//     const user = new User(req.body)
//     try {
//         await user.save()
//         const token = await generateAuthToken(user)
//         res.status(201).send({user, token})
//         console.log("hello");
//     } catch (error) {
//         res.status(400).send(error)
//         console.log("error");
//     }

// })

//login

router.post('/login', async (req, res) => {
    const user = await findByCredentials(req.body.email, req.body.password)
    if (user) {
        await Tokengenerator();
    }
})

//logout
router.post('/logout', Auth, async (req, res) => {
   
    try {
       req.user.tokens =  req.user.tokens.filter((token) => {
            return token.token !== req.token 
        })

        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
})

//Logout All 
router.post('/logoutAll', Auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()        
    }
})
module.exports = router