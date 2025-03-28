const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://bhumireddysahithis89:PAWhQ8wSikMrTMJy@cluster0.tnfvraz.mongodb.net/")

    }catch(error){
        console.log("Mongo bd error",error);
    }
    
}

module.exports = connect;