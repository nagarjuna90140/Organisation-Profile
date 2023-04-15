const sofTechModel=require("../Model/softwareTechnology")
const createSoftwareTech=async(req,res)=>{
    const val = new sofTechModel({
        softwareTechnology: req.body.softwareTechnology,
    })
    try {
        const val1 = await val.save()
        res.status(201).send({
            success: true,
            message: "software technology  created successfully",
            val1
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success: false,
            message: "request failed",
        })
    }
}

//get all software technologies

const getAllSoftTechs=async(req,res)=>{
    const val = await sofTechModel.find({})
    try {
        if (val) {
            res.send(val)
        } else {
            res.send("data not exist")
        }
    } catch (error) {
        res.send(error)
    }
}
//get single software technology

const getSingleSofTechnology=async(req,res)=>{
    const val = await sofTechModel.findOne({ _id: req.params._id })
    try {

        if (val) {
            res.send(val)
        } else {
            res.send(" data not exist")
        }

    } catch (error) {
        res.send(error)
    }
}

//update software technology

const updateSofTech=async(req,res)=>{
    let upId = req.params._id
    let upsoftwareTechnology = req.body.up
    const data = await sofTechModel.findOneAndUpdate({ _id: upId }, {
        $set: {softwareTechnology:upsoftwareTechnology}
    }, { next: false })
    if (data == null) {
        res.send("data not exist")
    } else {
        res.send(data)
    }
}
//delete software technology

const deleteSofTech=async(req,res)=>{
    const val = await sofTechModel.findOneAndDelete({ _id: req.params._id })
    try {

        if (val) {
            res.send("deleted one document")
        } else {
            res.send("data not exist")
        }

    } catch (error) {
        res.send(error)
    }
}
module.exports={createSoftwareTech,getAllSoftTechs,getSingleSofTechnology,updateSofTech,deleteSofTech}