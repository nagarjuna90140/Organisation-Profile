const bcrypt=require("bcrypt")
// const userModel = require("../Model/userModel")

const hashPassword=async(password)=>{
   try {
    const saltRounds=10
    const hashedPassword=await bcrypt.hash(password,saltRounds)
       return hashedPassword
    
   } catch (error) {
    console.log(error)
   }
}

const comparePassword=async(password,hashedPassword)=>{
     return bcrypt.compare(password,hashedPassword)
}


module.exports={hashPassword,comparePassword}