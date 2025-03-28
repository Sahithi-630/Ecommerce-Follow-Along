const express = require("express");
const allProductRouter = express.Router();
const productModel = require("../models/productModel");
allProductRouter.get("/",async(req,res)=>{
    try {
        const products = await productModel.find();
        return res.status(200).send({message:"Sucessfull",products:products})
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})

allProductRouter.get("/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return req.status(400).send({message:"Please provide id"});
        }
        const product = await productModel.findOne({_id:id});
        return res.status(200).send({message:"Sucessfull",product:product})
    } catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})

module.export = allProductRouter;