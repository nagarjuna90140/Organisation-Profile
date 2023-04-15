const mongoose=require("mongoose")
const sofTechSchema=mongoose.Schema({
    softwareTechnology:{
        type:String
    }
  
  
   
   
},{timestamps:true})
module.exports=mongoose.model("softwareTechnology",sofTechSchema)