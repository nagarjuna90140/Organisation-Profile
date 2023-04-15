const mongoose=require("mongoose")
const businessSchema=mongoose.Schema({
    legalName:{
        type:String
    },
    softwareTechnology:{
        type:String
    },
    stAddInfo:{
        type:String,
    },
    opportunityType:{
        type:String,
        enum:["implementation","developing","migrating","cloud computing","testing","support"]
    },
    opportunityStatus:{
        type:String,
        enum:["open","close","cancel"]
    },
    opportunityAddInfo:{
        type:String,
    },
    date:{
        type:Date,
    }
   
   
},{timestamps:true})
module.exports=mongoose.model("businessModel",businessSchema)