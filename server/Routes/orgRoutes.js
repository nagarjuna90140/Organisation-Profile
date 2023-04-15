const express=require("express")
const orgModel=require("../Model/organisationModel")
const {createOrgProfile,updateorgProfile,handleDelete,getByIndustryName,getSingleOrg,getByLegalNameIndustryName,getByLegalName,getAllInSingleUrl,
    getByAllThree,getAll}=require("../controllers/orgController")
const {requireSignIn,isAdmin}=require("../middlewear/authMiddlewear")

const router=express.Router()

//post organisation details
router.post("/",createOrgProfile)


//updating the data
router.put("/:id",updateorgProfile)


//deleting the data
router.delete("/:id",handleDelete)


//getting by single id
router.get("/:id",getSingleOrg)


//getting details by legalName
router.get("/get/legalName/:legalName",getByLegalName)
//get by industryName
router.get("/get/industryName/:industryName",getByIndustryName)


//get by single url
router.get("/getAll/:get",getAllInSingleUrl)


//search functionality
router.get("/search/:legalName/:industryName",getByLegalNameIndustryName)

//search with three fields

router.get("/search/:legalName/:industryName/:address",getByAllThree)



router.get("/get/all/profiles",getAll)



module.exports=router