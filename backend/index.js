const express = require("express")
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require('jsonwebtoken');
const userModel = require("./models/userModel");
const cors = require("cors");
app.use(cors());

const PORT =process.env.PORT || 8080;
const userRouter = require("./controller/userRouter");
const productRouter = require("../controller/productRouter");

 
app.get("/",(req,res)=>{
    try {
        res.status(200).send({mgs:"This is e-commerce code along backend"});
    } catch (error) {
        res.status(500).send({message:"error occured"});
    }
})

app.use("/user",userRouter)

app.use("/product",async(req,res)=>{
    try {
        const auth = req.headers.authorization;
        if(!auth){
            return res.status(401).send({message:"Please login"});
        }
        const decode = jwt.verify(token, process.env.JWT_PASSWORD);
        const user = await userModel.findOne({_id:decoded.id});
        if(!user){
            return res.status(401).send({message:"Please register first"});
        }
        console.log(decode)
        next();
    } catch (error) {
        
    }
},productRouter);

app.listen(8080,async()=>{
    try {
        await connect();
        console.log("Server connected successfully");
    } catch (error) {
        console.log("Error",error)
    }
})