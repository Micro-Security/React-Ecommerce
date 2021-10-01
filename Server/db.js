const mongoose = require("mongoose");
const dotenv=require("dotenv");

dotenv.config({path:"./config.env"});

mongoose.connect(process.env.DATABASE, {useNewUrlParser:true, useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:true}
 ).then(()=>console.log("Database is Connected!!"))
 .catch((err) => console.log(err));
module.exports=mongoose;