const amsPartnerModel = require("../Model/AmsPartnerModel")
const organisationModel = require("../Model/organisationModel")


const createAmsPartner=async(req,res)=>{
    const { legalName } = req.body
    const data = await organisationModel.findOne({"legalName":{ '$regex': legalName + '.*', '$options': 'i'}})
    if (data == null) {
        return res.send("legalName not exist")
    } else {
        const val = new amsPartnerModel({
            partnerName: req.body.partnerName,
            legalName: req.body.legalName,
            AmsExpireyDate: req.body.AmsExpireyDate,
            partnerAddInfo1: req.body.partnerAddInfo1,
            partnerAddInfo2: req.body.partnerAddInfo2,


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

//get all ams partners
const getAllAmsPartners = async (req, res) => {
    const val = await amsPartnerModel.find({})
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

//get single ams partner

const getAmsSinglePartner=async(req,res)=>{
    const partnerName=req.params.partnerName
    const val = await amsPartnerModel.findOne({"partnerName":{ '$regex': partnerName + '.*', '$options': 'i'}})
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

//get by legal name
const getByLegalName=async(req,res)=>{
    const legalName=req.params.legalName
    const val = await amsPartnerModel.find({"legalName":{ '$regex': legalName + '.*', '$options': 'i'}})
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
//update ams partner
const updateAmsPartner=async(req,res)=>{
    let uppartnerName = req.params.partnerName
    let upAmsExpireyDate = req.body.AmsExpireyDate
    let uppartnerAddInfo1 = req.body.partnerAddInfo1
    let uppartnerAddInfo2 = req.body.partnerAddInfo2 


    const data = await amsPartnerModel.findOneAndUpdate({ partnerName: uppartnerName }, {
        $set: {AmsExpireyDate:upAmsExpireyDate,partnerAddInfo1:uppartnerAddInfo1,partnerAddInfo2:uppartnerAddInfo2}
    }, { next: false })
    if (data == null) {
        res.send("data not exist")
    } else {
        res.send(data)
    }
}

//delete ams partner
const deleteAmsPartner=async(req,res)=>{
    const val = await amsPartnerModel.findOneAndDelete({ partnerName: req.params.partnerName })
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
module.exports={createAmsPartner,getAllAmsPartners,getAmsSinglePartner,getByLegalName,updateAmsPartner,deleteAmsPartner}