const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect("mongodb+srv://BhumireddySahithi:<db_password>@clusterO.7rgzq.mongodb.net/")

    }catch(error){
        console.log("Mongo bd error",error);
    }
    
}

module.exports = connect;