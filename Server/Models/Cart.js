// Importing Function
const mongoose = require("mongoose");

// Creating Mongoose Model
const Cart = mongoose.model('Cart', {

    useremail: {
        type: String
    },

    items: [{
        productId: {
            type: String,
        },

        productName: {
            type: String
        },

        quantity: {
            type: Number,
        },

        price: {
            type: Number
        }
    }],

    totalPrice: {
        type: Number,
    }
});

// Exporting Model
module.exports = { Cart };
