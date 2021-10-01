// Importing Model
const { Products } = require("../Models/Products");


// Get All Products
const getproducts = async (res) => {
    try {
        const result = await Products.find();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
}


// Get Single Product by Id
const getproduct = async (req, res) => {

    try {

        const _id = req.params.id; // Product Id
        const result = await Products.findById({ _id }); // Find Product By Id in Datbase
        res.status(200).send(result);

    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}


// Creating New Product
const createproduct = async (req, res) => {

    try {

        // Creating New Products Object
        var product = new Products({
            Name: req.body.Name,
            Price: req.body.Price,
            OS: req.body.OS,
            Display: req.body.Display,
            Processor: req.body.Processor,
            Memory: req.body.Memory,
            Weight: req.body.Weight,
            Dimension: req.body.Dimension,
            Graphics_Processor: req.body.Graphics_Processor,
            image: req.body.image
        });

        // Saving The Created object in database
        const result = await product.save();
        res.status(200).send(result);
    }
    catch (err) {

        console.log(err);
        res.status(400).send(err);
    }
}
module.exports = { getproducts, getproduct, createproduct }
