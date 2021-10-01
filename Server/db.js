const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

async function startDatabase() {
    const url = process.env.DATABASE;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database is Connected!!");
}

module.exports = startDatabase;
