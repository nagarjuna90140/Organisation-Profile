const mongoose=require("mongoose")
const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true,
    },
    phone:{
        type:Number
    },
    role:{
        type:String,
        enum:["user","Admin","Sales Officer"]
    },
    password:{
        type:String
    }
},{timestamps:true})
module.exports=mongoose.model("userDetails",userSchema)