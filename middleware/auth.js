const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req, res, next) => {

        // let token = req.headers('Authorization').replace('Bearer ','')
        let token = req.headers.authorization.replace('Bearer ','')
        console.log(token)
        if (!token) return res.status(401).send("Access Denied / Unauthorized request");

        try {   
            if (token === 'null' || !token) return res.status(401).send('Unauthorized request');
    
            let verifiedUser = jwt.verify(token, process.env.JWT_KEY);   // config.TOKEN_SECRET => 'secretKey'
            if (!verifiedUser) return res.status(401).send('Unauthorized request')
            const user = await User.findOne({ _id: verifiedUser._id, 'tokens.token':token })
            console.log(verifiedUser);
            req.user = user; // user_id
            next();
    
        } catch (error) {
            // console.log(error);
            res.status(401).send("Invalid Token");
        }
}

module.exports = auth