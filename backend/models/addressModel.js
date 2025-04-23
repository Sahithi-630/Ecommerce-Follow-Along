const addressSchema = mongoose.Schema({
    country:{type:String,required:true},
    address1:{type:String,required:true},
    address2:{type:String,required:true},
    city:{type:String,required:true},
    zipCode:{tupe:Number,required:true}
})