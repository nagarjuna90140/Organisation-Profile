const express=require("express")
const router=express.Router()
const {requireSignIn,isAdmin}=require("../middlewear/authMiddlewear")

const {createErpPartner,getAllPartners,getSingleErpPartner,getByLegalName,updateErpPartner,deletePartner}=require("../controllers/erpPartnerController")

//post erp partner
router.post("/create",createErpPartner)

//get single erpPartner
router.get("/get",getAllPartners)
//get single erpPartner
router.get("/get/:partnerName",getSingleErpPartner)
//get by legal name
router.get("/get/legal/:legalName",getByLegalName)


//update single erp partner details

router.put("/update/:partnerName",updateErpPartner)

//delete erp partner

router.delete("/delete/:partnerName",deletePartner)

module.exports=router