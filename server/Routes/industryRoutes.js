const express = require("express")
const industryModel = require("../Model/IndustryModel")
const router = express.Router()
const { requireSignIn } = require("../middlewear/authMiddlewear")


//post the industries

// router.post("/",async (req,res)=>{
//     const {industryName}=req.body
//     const existingIndustry=await industryModel.find({industryName})
//     if(existingIndustry){
//         return res.send(existingIndustry)
//     }else{
//         var data=new industryModel({
//             industryName:req.body.industryName,
//         })
//         try{
//             const val=await  data.save()
//             res.send(val)
//         }
//         catch(err){
//             res.send("error")
//         }
//     }

//   })





router.post("/", async (req, res) => {

    let industry;
    const { industryName } = req.body;
    
    try {
        industry = new industryModel({industryName

        })

        await industry.save()
    } catch (error) {
        console.log(error)
    }

})





//get industries
router.get("/", async (req, res) => {
    const val = await industryModel.find({})
    try {

        if (val) {
            res.send(val)
        } else {
            res.send("no data exist")
        }

    } catch (error) {
        res.send(error)
    }
})
module.exports = router