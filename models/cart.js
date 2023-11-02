const mongoose = require("mongoose");
const {Schema,model} = mongoose;
const cartShema = new Schema({ 
    owner : {
        type: ObjectID,
        required: true,
        ref: 'User'
       },
    items: [{
        itemId: {
         type: ObjectID,
         ref: 'Item',
         required: true
      },
    name: String,
    quantity: {
         type: Number,
         required: true,
         min: 1,
         default: 1},
         price: Number
       }],
    bill: {
          type: Number,
          required: true,
          default: 0
        }
      }, {
    timestamps: true
     })
const UserModel = model('Cart',cartShema)
module.exports = UserModel;