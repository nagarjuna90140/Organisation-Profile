const mongoose=require("mongoose")
const orgDocSchema=mongoose.Schema({
    legalName:{
        type:String,
        trim:true
    },
    file:{
        type:Buffer,
       

    }
 

  
},{timestamps:true})
module.exports=mongoose.model("orgDocument",orgDocSchema)