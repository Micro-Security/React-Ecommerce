
const {Cart} = require("../Models/Cart");
const { Products } = require("../Models/Products");

const createcart= async (req)=>{
    var cart=new Cart({
        useremail: req,
        totalPrice: 0
    });
    result= await cart.save();
}

const addtocart = async (req, res) => {
    try {
        const useremail = req.params.useremail;
        const _id = req.params.id;

        const ProductDetails= await Products.findById({_id});
        
        const psname = ProductDetails.Name;
        const pprice = ProductDetails.Price;

        const cartdetails = await Cart.findOne({ useremail });

        const tp = cartdetails.totalPrice;
        const totalprice = tp+pprice;
        
        var result = await Cart.updateOne({ useremail }, {
            totalPrice: totalprice,
            $push: {
                items: [{
                        productId: _id,
                        productName: psname,
                        price: pprice
                }],
                
            }
        });
        res.status(201).send("Added");
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

const getcart = async (req, res) => {
    try {
        const useremail = req.params.useremail;
        const cartdetails = await Cart.findOne({ useremail });
 
        const citems=cartdetails.items;
        const ctotalPrice=cartdetails.totalPrice;
        res.status(200).send({items:
            citems,
            totalPrice:
            ctotalPrice});
    }
    catch (err) {
        res.status(500).send(err);
    }
}


const updatecart = async (req, res) => {
    try {
        const useremail = req.params.useremail;
        const _id = req.params.id;

        const ProductDetails= await Products.findById({_id});
        
          const pprice = ProductDetails.Price;

          const cart = await Cart.findOne({ useremail });

        const tp = cart.totalPrice;
        const totalprice = tp - pprice;

        var cartdetails = await Cart.updateOne(
            { useremail },
            {totalPrice:totalprice, $pull: { items: { productId: _id } 
        }
         }
        )
        res.status(201).send(cartdetails);
    }
    catch (err) {
        res.status(400).send(err);
    }
}

const deletefromcart = async (req,res) => {
    try {
        const useremail = req.params.useremail;
        var cartdetails = await Cart.findOneAndDelete({useremail});
        createcart(useremail);
        res.status(201).send();
    }
    catch (err) {
        res.status(400).send(err);
    }
}
module.exports = {
    createcart,
    addtocart,
    getcart,
    updatecart,
    deletefromcart
};