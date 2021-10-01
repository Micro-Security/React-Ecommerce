// Importing Function
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: "./config.env" }); // configuring environment variables

// Creating Mongoose Schema
const user = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    contact: { type: Number },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    tokens: [{
        token: {
            type: String
        }
    }]
});

// Genetrating Auth-Token For The Newly Registered User
user.methods.generateAuthToken = async function () {

    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch (err) {
        console.log(err);
    }
}

// Hashing Password
user.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Creating Mongoose Model
const User = mongoose.model('User', user);


// Exporting Model
module.exports = { User };
