/ Importing Functions
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config.env" }); // Configuring Environment Variables 

// Importing Model
const { User } = require("./Models/User");

// Authenticate User
const authenticate = async (req, res, next) => {

    try {

        // Fetching Auth-Token
        const token = req.cookies.jwtoken;

        // Extracting Data From Token
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);

        // Finding Other Information Of The User from Database
        const rootUser = await User.findOne({ _id: verifytoken._id, "tokens.token": token });

        // If There is no user found
        if (!rootUser) {
            throw new Error('User not Found')
        }

        // Setting variables to used next
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        // Run Next Function
        next();
    }
    catch (err) {

        res.status(401).send('Unauthorized:No token provided');
        console.log(err);
    }
}


module.exports = authenticate;
