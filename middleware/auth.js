const jwt = require('jsonwebtoken')
const User = require('../models/user')

const Tokengenerator = async(req, res, next) => {
    const user = new User(req.body)
  if (user) {
    // Create a JWT token with user id and email
    const token = jwt.sign({ _id: user._id, email: user.email },process.env.JWT_KEY, { expiresIn: '24h' });

    res.json({ token }); // Send the generated token as a response
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = Tokengenerator