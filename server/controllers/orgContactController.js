const orgContactModel=require("../Model/orgConModel")
const organisationModel=require("../Model/organisationModel")
const createOrg=async(req,res)=>{
const {legalName}=req.body
const data=await organisationModel.findOne({legalName})
if(data==null){
    return res.send("legalName not exist")
}else{
    const val=new orgContactModel({
        legalName:req.body.legalName,
        contactName:req.body.contactName,
        designation:req.body.designation,
        email:req.body.email,
        role:req.body.role,
        phoneNumber:req.body.phoneNumber,
        LinkedIn:req.body.LinkedIn,
        facebookUrl:req.body.facebookUrl,
        otherUrl:req.body.otherUrl

    })
   try {
    const val1=await val.save()
    res.status(201).send({
        success:true,
        message:"contact created successfully",
        val1
    })
   } catch (error) {
    console.log(error)
    res.status(400).send({
        success:false,
        message:"request failed",
    })
   }
}
}
//get all contacts
const getAllUsers=async (req,res)=>{
    const val=await orgContactModel.find({})
      try {
            if(val){
                res.send(val)
            }else{
                res.send("no data exist")
            } 
      } catch (error) {
        res.send(error)
      }
    }
//get single contact list
const getSingleUser=async (req,res)=>{
    const val=await orgContactModel.findOne({contactName:req.params.contactName})
      try {
    
            if(val){
                res.send(val)
            }else{
                res.send(" data not exist")
            }
        
      } catch (error) {
        res.send(error)
      }
    }
//update single contact
const updateSingleContact=async(req,res)=>{
    let upcontactName=req.params.contactName
    let upEmail=req.body.email
    let updesignation=req.body.designation
    let upRole=req.body.role
    let upPhoneNumber=req.body.phoneNumber
    let upLinkedIn=req.body.LinkedIn
    let upfacebookUrl=req.body.facebookUrl
    let upotherUrl=req.body.otherUrl
 
  const data=await orgContactModel.findOneAndUpdate({contactName:upcontactName},{$set:{email:upEmail,designation:updesignation,role:upRole,
phoneNumber:upPhoneNumber,LinkedIn:upLinkedIn,facebookUrl:upfacebookUrl,otherUrl:upotherUrl}},{next:false})
        if(data==null){
            res.send("unable to update")
        }else{
            res.send(data)
        }
    }

//get by legal name
const getByLegalName=async(req,res)=>{
    const legalName=req.params.legalName
    const val = await orgContactModel.find({"legalName":{ '$regex': legalName + '.*', '$options': 'i'}})
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
//delete single conatct
const deleteContact=async(req,res)=>{
    const val=await orgContactModel.findOneAndDelete({contactName:req.params.contactName})
    try {
  
          if(val){
              res.send("deleted one document")
          }else{
              res.send("no data exist")
          }
      
    } catch (error) {
      res.send(error)
    }
}

module.exports={createOrg,getAllUsers,getSingleUser,updateSingleContact,getByLegalName,deleteContact}