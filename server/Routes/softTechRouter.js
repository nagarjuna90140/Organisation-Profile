const express=require("express")
const router=express.Router()
const {createSoftwareTech,getAllSoftTechs,getSingleSofTechnology,updateSofTech,deleteSofTech}=require("../controllers/softTechController")

router.post("/create",createSoftwareTech)

//get all software technologies
router.get("/get",getAllSoftTechs)
//get single software technology

router.get("/get/:_id",getSingleSofTechnology)

//update sotTechnologies

router.put("/update/:_id",updateSofTech)
//delete software technology
router.delete("/delete/:_id",deleteSofTech)

module.exports=router