const {Schema,model} = require("mongoose");
const productSchema = new Schema({ 
    owner : {
        type: ObjectID,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    }, {
    timestamps: true
    }
);
productSchema.index({"$**" :"text"})
module.exports = model('Products',productSchema);