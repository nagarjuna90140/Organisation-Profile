const mongoose=require("mongoose")
const erpSchema=mongoose.Schema({
    legalName:{
        type:String
    },
    partnerName:{
        type:String,
    },
    implementationYear:{
        type:Number,
    },
    addInfo1:{
        type:String,
    },
    addInfo2:{
        type:String,
    }
   
   
},{timestamps:true})
module.exports=mongoose.model("erpPartnerModel",erpSchema)