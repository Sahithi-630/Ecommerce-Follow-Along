const express = require("express");

const productRouter = express.Router();

const productModel = require("../models/productModel");

const productImages = require("../middleware/multer");

productRouter.post("/addproduct", async(req,res,next)=>{
    productImages.array("images",6)(req,res(err)=>{
        if(err){
            return res.status(500).send({msg:"Something went wrong while uploading images"});
        }
    })
},async(req,res)=>{
    try {
        const{title,description,price} = req.body;
        if(!title || !description || !price){
            return res.status(404)._construct({msg:"Please add all fields"});
        }

        const images = req.files;

    } catch (error) {
        return res.status(500).send({msg:"Something wen wrong",error});
    }
})