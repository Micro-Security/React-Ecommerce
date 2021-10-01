const { User } = require("./Models/User");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");

dotenv.config({path:"./config.env"});

const authenticate=async (req,res,next)=>{
    try{
        const token=req.cookies.jwtoken;
        console.log(token);
        const verifytoken=jwt.verify(token,process.env.SECRET_KEY);
        const rootUser=await User.findOne({_id:verifytoken._id,"tokens.token":token});

        if(!rootUser){
            throw new Error('User not Found')
        }

        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;

        next();
    }
    catch(err){
       res.status(401).send('Unauthorized:No token provided');
       console.log(err);
    }
}


module.exports={
    authenticate
};