const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req, res, next) => {
        let token = req.headers.authorization.replace('Bearer ','')
        if (!token) return res.status(401).send("Access Denied / Unauthorized request");

        try {   
            if (token === 'null' || !token) return res.status(401).send('Unauthorized request');
    
            let verifiedUser = jwt.verify(token, process.env.JWT_KEY);   
            if (!verifiedUser) return res.status(401).send('Unauthorized request')
            const user = await User.findOne({ _id: verifiedUser._id})
            console.log(verifiedUser);
            req.user = user; 
            next();
    
        } catch (error) {
            res.status(401).send("Invalid Token");
        }
}

module.exports = auth