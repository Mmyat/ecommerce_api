const User = require('../models/user')
const registerUser = async( req,res,next)=>{
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).json({
            isSuccess: true,
            message: "User created successfully.",
        });
    } catch (error) {
        if (user.role !== "admin" && user.role !== "user"){
            console.log("Unsupported user role")
            res.status(400).send({isSuccess: false,message:"Unsupported user role"});
        }else{
            console.log(error)
            res.status(400).send({isSuccess: false,message:"Registration fail!"});
        }     
    }
}
const login = async( req,res,next)=> {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).json({
            isSuccess: true,
            message: "Logged in successfully.",
            token,
        });
    } catch (error) {
            console.log(error)
            res.status(400).send({isSuccess: false,message:"Invalid user"});
    }
}
module.exports = {registerUser,login}