const mongoose=require("mongoose")
const erpVEndorSchema=mongoose.Schema({
    erpVendor:{
        type:String
    } 
},{timestamps:true})
module.exports=mongoose.model("erpVendor",erpVEndorSchema)