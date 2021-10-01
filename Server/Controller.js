
const express = require("express");
const router =new express.Router();
const { getproduct,getproducts, createproduct } = require("./DB Collections/Productops");
const { createuser,getuser,updateuser,signin } = require("./DB Collections/Userops");
const { getcart,addtocart,updatecart,deletefromcart} = require("./DB Collections/Cartops");


router.get("/User/:email",(req, res) => {
    getuser(req,res);
}); 

router.post("/Signin",(req,res)=>{
    signin(req,res);
})

router.post("/User", (req, res) => {
    createuser(req,res);
});

router.patch("/User/:email",(req,res)=>{
    updateuser(req,res);
});

router.get("/Products", (req, res) => {
    getproducts(res);
});

router.post("/Products",(req,res)=>{
    createproduct(req,res);
});

router.get("/Products/:id", (req, res) => {
    getproduct(req,res);
});

router.get("/Cart/:useremail", (req, res) => {
    getcart(req,res);
});

router.post("/Cart/:useremail/:id/", (req, res) => {
    addtocart(req,res);
});

router.patch("/Cart/:useremail/:id",(req,res)=>{
    updatecart(req,res);
})

router.delete("/Cart/:useremail",(req,res)=>{
    deletefromcart(req,res);
})

module.exports = router;