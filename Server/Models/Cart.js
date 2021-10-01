const mongoose = require("mongoose");
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

module.exports = {Cart};