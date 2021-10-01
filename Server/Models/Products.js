// Importing Function
const mongoose = require("mongoose");

// Creating Mongoose Model
const Products = mongoose.model('Products', {
    Name: { type: String },
    Price: { type: Number },
    OS: { type: String },
    Display: { type: String },
    Processor: { type: String },
    Memory: { type: String },
    Weight: { type: String },
    Dimension: { type: String },
    Graphics_Processor: { type: String },
    image: { type: String }
});

// Exporting Model
module.exports = { Products };
