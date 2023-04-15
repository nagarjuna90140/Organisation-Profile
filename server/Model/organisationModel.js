const mongoose=require("mongoose")
const orgSchema=mongoose.Schema({
    legalName:{
        type:String,
        trim:true
    },
    parentName:{
        type:String
    },
    crmName:{
        type:String
    },
    industryName:{
        type:String
    },
    noOfEmployees:{
        type:Number, 
    },
    turnOverRange:{
        type:Number, 
    },
    websiteUrl:{
        type:String, 
    },
    orgEmail:{
        type:String, 
    },
    phnNumber:{
        type:String, 
    },
    address:{
        type:String, 
    },
    orgAddInfo:{
        type:String, 
    },
    erpVendor:{
        type:String, 
    },
    year:{
        type:Number, 
    },
    erpAddInfo:{
        type:String, 
    },
},{timestamps:true})
module.exports=mongoose.model("organisationProfile",orgSchema)