const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");

dotenv.config({path:"./config.env"});

const user=new mongoose.Schema({
    name: {type : String},
    email: {type : String},
    password: {type : String},
    contact: {type : Number},
    street: {type : String},
    city: {type : String},
    state: {type : String},
    tokens:[{
        token:{
           type:String
        }
    }]
});

user.methods.generateAuthToken=async function(){
    try{
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
         await this.save();
         return token;
    }
    catch(err){
        console.log(err);
    }
  }
  
  user.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
next(); 
});

const User = mongoose.model('User',user);




module.exports={User};