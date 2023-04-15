const express=require("express")
const router=express.Router()
const {requireSignIn,isAdmin}=require("../middlewear/authMiddlewear")

const {createBusinesspartner,getByLegalName,getAllBusinessPartners,getSingleBusinessPartner,searchBusinessPartner,updateBusinessPartner,deleteBusinessPartner}=require("../controllers/businessController")

//post business partner details

router.post("/create",createBusinesspartner)

//get all
router.get("/get",getAllBusinessPartners)

//get single business partner

router.get("/get/:softwareTechnology",getSingleBusinessPartner)
//get by multiple fileds
router.get("/get/:softwareTechnology/:opportunityType",searchBusinessPartner)
//get by legal Name
router.get("/get/by/legalName/:legalName",getByLegalName)

//update business partner
router.put("/update/:id",updateBusinessPartner)

//delete business partner

router.delete("/delete/:softwareTechnology",deleteBusinessPartner)

module.exports=router