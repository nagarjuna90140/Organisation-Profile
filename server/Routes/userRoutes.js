const express=require("express")
const userModel=require("../Model/userModel")
const {registerController,
  isLoginController,
  getAllUsers,getSingleUser,updateUser,deleteUser,getByNameandEmail}=require("../controllers/userController")
const router=express.Router()
const {requireSignIn,isAdmin}=require("../middlewear/authMiddlewear")
const {comparePassword,hashPassword}=require("../auth/auth")


//register
router.post("/register",registerController)

//login
router.post("/login",isLoginController)


  //get details

router.get("/get",getAllUsers)

//get by name and email

router.get("/get/:name/:email",getByNameandEmail)
  

    //get single id
    router.get("/get/email/:email",getSingleUser)
    
//update user details

router.put("/update/:id",updateUser)
 

    //delete user
//router.delete("/:id",requireSignIn,isAdmin,deleteUser)
router.delete("/:id",deleteUser)

//get by query params

       


  module.exports=router