const jwt=require("jsonwebtoken")
const userModel=require("../Model/userModel")
const {comparePassword,hashPassword}=require("../auth/auth")
const registerController=async(req,res)=>{
  
    try{
      const{name,email,password,phone,role}=req.body
 

      const val1= await userModel.findOne({email})
          if(val1){
               return res.status(200).send({
                success:false,
                message:"Already registered please login"
              })
          }
      
      const hashedPassword= await hashPassword(password)

        var data= await new userModel({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            role:req.body.role,
            password:hashedPassword
     
        }).save()
           res.status(201).send({
            success:true,
            message:"registration successfull",
            data
           })
        
        }
      
    
    catch(err){
      res.status(400).send({
        success:false,
        message:"registration failed"
      })    }
}
  

  //login controller

  
const isLoginController=async(req,res)=>{

    try {
        const {email,password}=req.body
        if(!email  || !password){
          res.status(404).send({
            success:false,
            message:"email or password is missing"
          })        }
        const user=await userModel.findOne({email})
        if(!user){
           return res.status(400).send({
                success:false,
                message:"email is not registered"
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
           return res.status(400).send({
                success:false,
                message:"invalid password"
            })
        }
        const token=await jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d",})
          res.status(200).send({
            success:true,
            message:"login successfull",
            user:{
              name:user.name,
              email:user.email,
              phone:user.phone,
              role:user.role
            },
            token,
        })
      
    } catch (error) {
       console.log(error)
        res.status(400).send({
        success:false,
        message:" error while login"
      })
    }
}
//get all user details
const getAllUsers=async (req,res)=>{
    const val=await userModel.find({})
      try {
    
            if(val){
                res.send(val)
            }else{
                res.send("no data exist")
            }
        
      } catch (error) {
        res.send(error)
      }
    }

    //get single user details
    const getSingleUser=async (req,res)=>{
      const email=req.params.email
        const val=await userModel.findById({"email":{'$regex': email + '.*', '$options': 'i'}})
          try {
        
                if(val){
                    res.send(val)
                }else{
                    res.send("no data exist")
                }
            
          } catch (error) {
            res.send(error)
          }
        }

//update user details
const updateUser=async(req,res)=>{
  const id=req.params.id
  try {
    const { name, email,role,password,phone}=req.body
      const data= await userModel.findByIdAndUpdate(id,{...req.body},{new:true})
      if(data==null){
        res.send("No data exist")
      }else{
        await data.save()
        res.status(201).send({
          success:true,
          message:"updated successfully",
          data
  
  
        })
      }
     
} catch (error) {
    console.log(error)
    res.status(400).send({
        success:false,
        message:"error while updating the products"
    })
}
    }

    //delete user

  const deleteUser=async (req,res)=>{
        const val=await userModel.findOneAndDelete({id:req.params.id})
          try {
        
                if(val){
                    res.send("deleted one document")
                }else{
                    res.send("no data exist")
                }
            
          } catch (error) {
            res.send(error)
          }
        }

//get by name and email

const getByNameandEmail=async(req,res)=>{
const name=req.params.name
const email=req.params.email
const val= await  userModel.find( {$or: [{"name":{  '$regex': name + '.*', '$options': 'i'}},{"email":{  '$regex': email + '.*', '$options': 'i'}}]}  )
try {
  if(val==null){
      res.status(400).send({
          success:false,
          message:"user not exist"
      })
      
  }
  else{
      res.status(200).send({
          success:true,
          message:"fetched successfully",
          val
      })
  }
 } catch (error) {
  console.log(error)
  res.status(400).send({
      
      success:false,
      message:"error while fetching"
  })
 }

}

module.exports={isLoginController,registerController,getAllUsers,getSingleUser,updateUser,deleteUser,getByNameandEmail}