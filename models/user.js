const mongoose = require("mongoose");
const {Schema,model} = mongoose;
const validator = require('validator');
const UserShema = new Schema({ 
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
          validate( value ) {
                if( !validator.isEmail( value )) {
                     throw new Error( "Email is invalid" )
                      }
                 }
       },
    password : {
         type: String,
         required: true,
         minLength: 6,
         trim: true,
         validate(value) {
            if( value.toLowerCase().includes("password")) {
            throw new Error("password musn\’t contain password")
           }
        }
     },
     tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
     }, {
     timestamps: true
     })
const UserModel = model('User',UserShema)
module.exports = UserModel;