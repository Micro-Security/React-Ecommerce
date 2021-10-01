// Importing Functions
const { createcart } = require("../DB Collections/Cartops");
const { User } = require("../Models/User");
const bcrypt = require("bcryptjs");

// Login Function
const signin = async (req, res) => {

    try {

        let token; // Stores User Auth-Token
        var email = req.body.email; // Stores User Email
        var password = req.body.password; // Stores User Password

        // Finding The User With Email if exists in our database
        const result = await User.findOne({ email });

        // If user exists
        if (result) {

            // Take User Given Password and convert it to hash
            const isMatch = await bcrypt.compare(password, result.password);

            if (isMatch) {
                // Generate Auth-Token
                token = await result.generateAuthToken();
                // Set User Cookie
                res.cookie("jwtoken", token);
                res.status(200).json({ error: "You have Signed in Successfully!!" });
            }
            else {
                res.status(400).json({ error: "Invalid Credentials!!" });
            }
        }
    }
    catch (err) {

        console.log(err);
        res.status(400).send(err);
    }
}


// Register User Function
const createuser = async (req, res) => {

    try {

        // Create New Object With Given data
        var user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            contact: req.body.contact,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
        });

        // Save the user in database
        const result = await user.save();

        // Create Cart For User
        createcart(req.body.email);
        res.status(201).send(result);

    }
    catch (err) {
        res.status(400).send(err);
    }
}


// Fetch User Info Function
const getuser = async (req, res) => {

    try {
        const email = req.params.email; // Logged In User Email
        const result = await User.findOne({ email }); // Find User in database and fetch all information regarding that user
        res.status(200).send(result);
    }
    catch (err) {

        console.log(err);
        res.status(500).send(err);
    }
}


// Updating User Info Function
const updateuser = async (req, res) => {

    try {

        // Get Logged In User's Email        
        const email = req.params.email;

        // Find user and update the fields
        await User.updateOne({ email }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                contact: req.body.contact,
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
            }
        });

        res.status(201).send("Updated");
    }
    catch (err) {
        res.status(400).send(err);
    }
}

module.exports = {
    createuser,
    updateuser,
    getuser,
    signin
};
