const express=require("express")
const router=express.Router()
const {requireSignIn,isAdmin}=require("../middlewear/authMiddlewear")

const {createOrg,getAllUsers,getSingleUser,getByLegalName,updateSingleContact,deleteContact}=require("../controllers/orgContactController")

//post contact details
router.post("/create",createOrg)
//get all contacts
router.get("/get",getAllUsers)
//get single contact
router.get("/get/:contactName",getSingleUser)
//get by legal name
router.get("/get/legal/:legalName",getByLegalName)
//update single contact
router.put("/update/:contactName",updateSingleContact)
//delete single conatact
router.delete("/delete/:contactName",deleteContact)

module.exports=router