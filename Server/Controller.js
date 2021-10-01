// Importing Functions
const express = require("express");
const { getproduct, getproducts, createproduct } = require("./DB Collections/Productops");
const { createuser, getuser, updateuser, signin } = require("./DB Collections/Userops");
const { getcart, addtocart, updatecart, deletefromcart } = require("./DB Collections/Cartops");

// Setting Router For Exporting Routes
const router = new express.Router();


// Route 1 (GET): Fetching User Info From Database
router.get("/User/:email", (req, res) => {
    getuser(req, res);
});


// Route 2 (POST):  Log The User In
router.post("/Signin", (req, res) => {
    signin(req, res);
})


// Route 3 (POST): Create A New User
router.post("/User", (req, res) => {
    createuser(req, res);
});


// Route 4 (PATCH): Update User's Info
router.patch("/User/:email", (req, res) => {
    updateuser(req, res);
});


// Route 5 (GET): Get All Products
router.get("/Products", (req, res) => {
    getproducts(res);
});


// Route 6 (POST): Create New Product
router.post("/Products", (req, res) => {
    createproduct(req, res);
});


// Route 7 (GET): Fetch Specific Product's Information
router.get("/Products/:id", (req, res) => {
    getproduct(req, res);
});


// Route 8 (GET): Fetch All Items Present In User's Cart
router.get("/Cart/:useremail", (req, res) => {
    getcart(req, res);
});


// Route 9 (POST): Add Product To User's Cart
router.post("/Cart/:useremail/:id/", (req, res) => {
    addtocart(req, res);
});


// Route 10 (PATCH): Update Product Of User's Cart
router.patch("/Cart/:useremail/:id", (req, res) => {
    updatecart(req, res);
})


// Route 11 (DELETE): Delete All Items From User's Cart
router.delete("/Cart/:useremail", (req, res) => {
    deletefromcart(req, res);
})


module.exports = router;
