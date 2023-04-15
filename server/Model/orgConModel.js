const mongoose=require("mongoose")
const orgContactSchema=mongoose.Schema({
    legalName:{
        type:String
    },
    contactName:{
        type:String,
    },
   designation:{
    type:String
   },
    email:{
        type:String,
    },
    phoneNumber:{
     type:Number
    },
    role:{
        type:String,
    },
    LinkedIn:{
        type:String,
    },
    facebookUrl:{
        type:String,
    },
    otherUrl:{
        type:String,
    }
   
},{timestamps:true})
module.exports=mongoose.model("orgContact",orgContactSchema)