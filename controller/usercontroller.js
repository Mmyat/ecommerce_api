const express = require('express')
const User = require('../models/user')
const registerUser = async( req,res,next)=>{
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (error) {
        res.status(400).send(error)
    }
}
const login = async( req,res,next)=> {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {registerUser,login}