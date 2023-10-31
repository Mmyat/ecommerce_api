const {Schema,model} = require("mongoose");
const productSchema = new Schema({ 
    code : {
        type : String,
        },
    name : {
        type :String,
        required : true,
        },
    description : {
        type :String,
        required : true,
        },
    price : {
        type :Number,
        required : true,
        },
    },
  {timestamps :true}
);
productSchema.index({"$**" :"text"})
module.exports = model('Products',productSchema);