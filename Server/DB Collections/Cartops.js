// Importing Model
const { Cart } = require("../Models/Cart");
const { Products } = require("../Models/Products");


// Creating Initial Cart
const createcart = async (req) => {
    var cart = new Cart({
        useremail: req,
        totalPrice: 0
    });
    result = await cart.save();
}


// Add Product In User's Cart
const addtocart = async (req, res) => {

    try {

        const useremail = req.params.useremail; // logged user email
        const _id = req.params.id; // product id

        // Find Product By Id
        const ProductDetails = await Products.findById({ _id });

        // Product name and price
        const psname = ProductDetails.Name;
        const pprice = ProductDetails.Price;

        // fetch user's cart
        const cartdetails = await Cart.findOne({ useremail });

        // Finding Total Price Of All Items in user's cart
        const tp = cartdetails.totalPrice;
        const totalprice = tp + pprice;

        // Update Cart With New Item
        await Cart.updateOne({ useremail }, {
            totalPrice: totalprice,
            $push: {
                items: [{
                    productId: _id,
                    productName: psname,
                    price: pprice
                }],

            }
        });

        res.status(200).send("Added");
    }
    catch (err) {

        console.log(err);
        res.status(400).send(err);
    }
}


// Get Products Present in cart
const getcart = async (req, res) => {

    try {

        const useremail = req.params.useremail;
        const cartdetails = await Cart.findOne({ useremail });

        // Getting Items From Cart
        const citems = cartdetails.items;

        // Getting Total Price Of ALl Items
        const ctotalPrice = cartdetails.totalPrice;

        res.status(200).send({ items: citems, totalPrice: ctotalPrice });
    }

    catch (err) {
        res.status(500).send(err);
    }
}


// Update Cart Items
const updatecart = async (req, res) => {

    try {

        const useremail = req.params.useremail;
        const _id = req.params.id;

        const ProductDetails = await Products.findById({ _id });
        const pprice = ProductDetails.Price;
        const cart = await Cart.findOne({ useremail });

        const tp = cart.totalPrice;
        const totalprice = tp - pprice;

        var cartdetails = await Cart.updateOne(
            { useremail },
            {
                totalPrice: totalprice, $pull: {
                    items: { productId: _id }
                }
            }
        )

        res.status(200).send(cartdetails);
    }
    catch (err) {
        res.status(400).send(err);
    }
}


// Delete All Items Present In Cart
const deletefromcart = async (req, res) => {

    try {

        const useremail = req.params.useremail;
        await Cart.findOneAndDelete({ useremail });
        createcart(useremail);

        res.status(201).send();
    }
    catch (err) {
        res.status(400).send(err);
    }
}


module.exports = { createcart, addtocart, getcart, updatecart, deletefromcart };
