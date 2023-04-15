const businessModel = require("../Model/BusinessModel")
const organisationModel = require("../Model/organisationModel")
const sofTechModel=require("../Model/softwareTechnology")

const createBusinesspartner=async(req,res)=>{
    const { legalName } = req.body
    const {softwareTechnology}=req.body
    const data = await organisationModel.findOne({ legalName })
    if (data == null) {
        return res.send("legalName not exist")
    } else {
        const data1 = await sofTechModel.findOne({ softwareTechnology })

        if(data1==null){
            return res.send("software technology is not exist")

        }else{
            const val = new businessModel({
                legalName:req.body.legalName,
                stAddInfo: req.body.stAddInfo,
                softwareTechnology: req.body.softwareTechnology,
                opportunityType: req.body.opportunityType,
                opportunityStatus: req.body.opportunityStatus,
                opportunityAddInfo: req.body.opportunityAddInfo,
                date: req.body.date
            })
            try {
                const val1 = await val.save()
                res.status(201).send({
                    success: true,
                    message: "business created successfully",
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
}
//get all business partners

const getAllBusinessPartners = async (req, res) => {
    const val = await businessModel.find({})
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
//get single business

const getSingleBusinessPartner = async (req, res) => {
    const val = await businessModel.find({ softwareTechnology: req.params.softwareTechnology })
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
//search by multiple fileds
const searchBusinessPartner = async (req, res) => {
    const softwareTechnology=req.params.softwareTechnology
    const opportunityType=req.params.opportunityType
    const val= await businessModel.find( {$and: [ {softwareTechnology},{ opportunityType } ]}  )
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

//update business partner
const updateBusinessPartner=async(req,res)=>{
    let upid=req.params.id
    let upsoftwareTechnology = req.body.softwareTechnology
    let upstAddInfo = req.body.stAddInfo
    let upopportunityType = req.body.opportunityType
    let upopportunityStatus = req.body.opportunityStatus 
    let upopportunityAddInfo = req.body.opportunityAddInfo 
    let update = req.body.date 
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)){
        const data = await businessModel.findOneAndUpdate({ id: upid }, {
            $set: {softwareTechnology:upsoftwareTechnology,upstAddInfo:upstAddInfo,opportunityType:upopportunityType,opportunityStatus:upopportunityStatus,
                opportunityAddInfo:upopportunityAddInfo,date:update}
        }, { next: false })
        if (data == null) {
            res.send("data not exist")
        } else {
            res.send(data)
        }
    }

 
}

//const deleteBusinessPartner

const deleteBusinessPartner=async(req,res)=>{
   
        const val = await businessModel.findOneAndDelete({ softwareTechnology: req.params.softwareTechnology })
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
//get by legalName
const getByLegalName=async(req,res)=>{
    const legalName=req.params.legalName
    const val = await businessModel.find({"legalName":{ '$regex': legalName + '.*', '$options': 'i'}})
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
module.exports={createBusinesspartner,getByLegalName,getAllBusinessPartners,getSingleBusinessPartner,searchBusinessPartner,updateBusinessPartner,deleteBusinessPartner}