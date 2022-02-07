const router = require("express").Router();
const Customers = require("../models/Customers");

router.post("/", async(req,res) => {
    const newCustomer = new Customers(req.body);
    try{
        const savedCustomer = await newCustomer.save();
        res.status(200).json(savedCustomer);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/", async(req,res) => {
    try{
        const allcustomer = await Customers.find();
        res.status(200).json(allcustomer);
    }catch(err){
        res.status(500).json(err);
    }
    
});