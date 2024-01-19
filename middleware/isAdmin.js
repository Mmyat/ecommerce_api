const User = require("../models/user");
 const isAdmin = async (req, res, next) => {
  try {
    const userId  = req.user._id;
    const userDoc = await User.findById(userId).select("role");
    if (userDoc.role !== "admin") {
      throw new Error("Unauthorized admin.");
    }
    next();
  } catch (error) {
    return res.status(401).json({
      isSuccess: false,
      messgae: error.message,
    });
  }
};
module.exports = isAdmin;