const express=require("express")
const erpVendorModel=require("../Model/erpvendorModel")
const {requireSignIn,isAdmin}=require("../middlewear/authMiddlewear")

const router=express.Router()

router.post("/",requireSignIn,async(req,res)=>{
  const data=  new erpVendorModel({
    erpVendor:req.body.erpVendor
  })
  const val=await data.save()
  res.send(val)
})

//get erp vendors

router.get("/",async (req,res)=>{
  const val=await erpVendorModel.find({})
    try {
  
          if(val){
              res.send(val)
          }else{
              res.send("no data exist")
          }
      
    } catch (error) {
      res.send(error)
    }
  })

module.exports=router