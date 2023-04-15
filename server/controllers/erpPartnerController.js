const erpPartnerModel = require("../Model/erpPartnerModel")
const organisationModel = require("../Model/organisationModel")

const createErpPartner = async (req, res) => {
    const { legalName } = req.body
    const data = await organisationModel.findOne({ legalName })
    if (data == null) {
        return res.send("legalName not exist")
    } else {
        const val = new erpPartnerModel({
            partnerName: req.body.partnerName,
            legalName: req.body.legalName,
            implementationYear: req.body.implementationYear,
            addInfo1: req.body.addInfo1,
            addInfo2: req.body.addInfo2,


        })
        try {
            const val1 = await val.save()
            res.status(201).send({
                success: true,
                message: "erpPartner created successfully",
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

//get all partners

const getAllPartners = async (req, res) => {
    const val = await erpPartnerModel.find({})
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

//get single partner
const getSingleErpPartner = async (req, res) => {
    const partnerName=req.params.partnerName
    const val = await erpPartnerModel.findOne({"partnerName":{  '$regex': partnerName + '.*', '$options': 'i'}})
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
    const val = await erpPartnerModel.find({"legalName":{  '$regex': legalName + '.*', '$options': 'i'}})
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

//update single erpPartner details
const updateErpPartner = async (req, res) => {
    let uppartnerName = req.params.partnerName
    let upimplementationYear = req.body.implementationYear
    let upaddInfo1 = req.body.addInfo1
    let upaddInfo2 = req.body.addInfo2

    const data = await erpPartnerModel.findOneAndUpdate({ partnerName: uppartnerName }, {
        $set: {implementationYear:upimplementationYear,addInfo1:upaddInfo1,addInfo2:upaddInfo2}
    }, { next: false })
    if (data == null) {
        res.send("data not exist")
    } else {
        res.send(data)
    }
}

//delete erpPartner
const deletePartner = async (req, res) => {
    const val = await erpPartnerModel.findOneAndDelete({ partnerName: req.params.partnerName })
    try {

        if (val) {
            res.send("deleted one document")
        } else {
            res.send("no data exist")
        }

    } catch (error) {
        res.send(error)
    }
}


module.exports = { createErpPartner, getAllPartners, getSingleErpPartner, getByLegalName,updateErpPartner, deletePartner }