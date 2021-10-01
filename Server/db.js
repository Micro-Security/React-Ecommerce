// Importing Functions
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" }); // Configuring Environment Variables 


async function startDatabase() {
    const url = process.env.DATABASE; // Database Connection URL
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database is Connected!!");
}

module.exports = startDatabase;
