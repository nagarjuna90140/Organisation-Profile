const jwt=require("jsonwebtoken")
const userModel=require("../Model/userModel")
const requireSignIn=async(req,res,next)=>{
    try {
        const decode= jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        next()
    } catch (error) {
        console.log(error)
    }
}

const isAdmin=async(req,res,next)=>{
  try {
    const user=await userModel.findById(req.user._id)
    if(user.role!==1){
        return res.status(401).send({
            success:false,
            message:"unauthorized person"
        })
    }else{
        next()
    }
  } catch (error) {
    console.log(error)
    return res.send(error)
    }
  }



module.exports={requireSignIn,isAdmin}