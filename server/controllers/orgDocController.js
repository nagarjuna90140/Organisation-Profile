const orgDocModel=require("../Model/ManageOrgModel")
const organisationModel=require("../Model/organisationModel")

const orgDocSingle=async(req,res)=>{
    const  legalName  = req.fields
    const data = await organisationModel.findOne({"legalName":{ '$regex': legalName + '.*', '$options': 'i'}})
    if (data == null) {
        return res.send("legalName not exist")
    } else {
        const val = new orgDocModel({
            file: req.files,
            legalName: req.fields
        })
        try {
            const val1 = await val.save()
            res.status(201).send({
                success: true,
                message: "ams partner  created successfully",
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
}
   




module.exports={orgDocSingle}
