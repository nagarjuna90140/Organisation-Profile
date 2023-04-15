const express=require("express")
const router=express.Router()
const {requireSignIn,isAdmin}=require("../middlewear/authMiddlewear")

const {createAmsPartner,getAllAmsPartners,getAmsSinglePartner,getByLegalName,updateAmsPartner,deleteAmsPartner}=require("../controllers/amsPartnerController")

//post ams partner details
router.post("/create",createAmsPartner)

//get all details 
router.get("/get",getAllAmsPartners)

//get single ams partner details

router.get("/get/:partnerName",getAmsSinglePartner)
//get by legal name
router.get("/get/legal/:legalName",getByLegalName)


//update ams partner
router.put("/update/:partnerName",updateAmsPartner)

//delete ams partner

router.delete("/delete/:partnerName",deleteAmsPartner)
module.exports=router