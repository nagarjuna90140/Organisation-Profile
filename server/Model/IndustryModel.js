const mongoose=require("mongoose")
const industrySchema=new mongoose.Schema({
    industryName:{
        type:String,
        unique:true
    }
},{timestamps:true})
module.exports=mongoose.model("industry",industrySchema)