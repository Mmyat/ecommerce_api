const mongoose = require("mongoose");
const {Schema,model} = mongoose;
const Products = new Schema({ 
    code : {
        type : String,
    },
    name : {
        type :String,
        required : true,
        unique : true},
    price : {
        type :Number,
        required : true,
        },
    },
  {timestamps :true}
);
const UserModel = model('products',Products)
module.exports = UserModel;