const mongoose = require("mongoose");
const Products = mongoose.model('Products',{
    Name: {type : String},
    Price: {type : Number},
    OS: {type : String},
    Display: {type : String},
    Processor: {type : String},
    Memory: {type : String},
    Weight: {type : String},
    Dimensions: {type : String},
    Graphics_Processor: {type : String},
    image:{type:String}
});
module.exports={Products};