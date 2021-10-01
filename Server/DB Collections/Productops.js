const { Products } = require("../Models/Products");

const getproducts = async (res) => {
    try {
        const result = await Products.find();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getproduct=async (req,res)=>{
    try{
        const _id=req.params.id;
        const result=await Products.findById({_id});
        res.status(200).send(result);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}

const createproduct = async (req, res) => {
    try {
        var product = new Products({
        Name:req.body.Name,
        Price:req.body.Price,
        OS: req.body.OS,
        Display: req.body.Display,
        Processor: req.body.Processor,
        Memory: req.body.Memory,
        Weight: req.body.Weight,
        Dimension: req.body.Dimension,
        Graphics_Processor: req.body.Graphics_Processor,
        });
        const result = await product.save();
        res.status(201).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}
module.exports={
    getproducts,
    getproduct,
    createproduct
}