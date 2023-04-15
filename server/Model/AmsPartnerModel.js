const mongoose=require("mongoose")
const AmsModel=mongoose.Schema({
    legalName:{
        type:String
    },
    partnerName:{
        type:String,
    },
    AmsExpireyDate:{
        type:Date,
    },
    partnerAddInfo1:{
        type:String,
    },
    partnerAddInfo2:{
        type:String,
    }
   
   
},{timestamps:true})
module.exports=mongoose.model("amsModel",AmsModel)