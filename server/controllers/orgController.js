const orgModel=require("../Model/organisationModel")
const erpModel=require("../Model/erpvendorModel")
const industryModel=require("../Model/IndustryModel")
const organisationModel = require("../Model/organisationModel")

const createOrgProfile=async(req,res)=>{
    const {industryName}=req.body
    const data1= await industryModel.findOne({"industryName":{  '$regex': industryName + '.*', '$options': 'i'}})
    if(data1==null){
       return res.send("industry is not existing please choose another industry")
    }
    const {erpVendor}=req.body
 const data=  await erpModel.findOne({"erpVendor":{  '$regex': erpVendor + '.*', '$options': 'i'}})
    if(data==null){
       return res.send("erp vendor is not existing choose another one")
    }
    
try {
  

    const val=new orgModel({
        legalName:req.body.legalName,
        parentName:req.body.parentName,
        crmName:req.body.crmName,
        industryName:req.body.industryName,
        noOfEmployees:req.body.noOfEmployees,
        turnOverRange:req.body.turnOverRange,
        websiteUrl:req.body.websiteUrl,
        orgEmail:req.body.orgEmail,
        phnNumber:req.body.phnNumber,
        address:req.body.address,
        orgAddInfo:req.body.orgAddInfo,
        erpVendor:req.body.erpVendor,
        year:req.body.year,
        erpAddInfo:req.body.erpAddInfo
    })
    try{
    const val1=await val.save()
    res.send(val1)
    }
    catch(error){
        res.send(error)
    }
 
} catch (error) {
    console.log(error)
}
}



//updating the organisation profile

const updateorgProfile=async(req,res)=>{
    try {
        const { legalName, parentName,crmName,industryName,noOfEmployees,
        turnOver, websiteUrl, orgEmail, phnNumber,address, orgAddInfo,erpVendor,
          erpAddInfo}=req.body
          if (req.params.id.match(/^[0-9a-fA-F]{24}$/)){
            const data= await organisationModel.findByIdAndUpdate(req.params.id,
                {...req.body},{new:true})
              await data.save()
              res.status(201).send({
                success:true,
                message:"updated successfully",
                data
    
    
              })
          }
         
    } catch (error) {
        console.log(error)
        res.status(400).send({
            success:false,
            message:"error while updating the products"
        })
    }
}
//deleting the org profile
const handleDelete=async(req,res)=>{

   try {
    const value=await organisationModel.findByIdAndDelete(req.params.id)

    if(value==null){
        res.send("document already deleted")
    }else{
        res.status(200).send({
            success:true,
            message:"one document deleted successfully"
         })
    }

   } catch (error) {
    res.status(200).send({
        success:true,
        message:error
     })
   }
 
}
//get single organisation profile
const getSingleOrg=async(req,res)=>{
    const val=await organisationModel.findOne({_id:req.params.id})
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

  const getByLegalNameIndustryName=async(req,res)=>{
    const legalName=req.params.legalName
    const industryName=req.params.industryName
     //const val= await  organisationModel.find( {$and: [ {legalName:"icici pvt ltd"},{ industryName:"Software" } ]}  )
    const val= await  organisationModel.find( {$and: [ {"legalName":{  '$regex': legalName + '.*', '$options': 'i'}},{"industryName":{  '$regex': industryName + '.*', '$options': 'i'}} ]}  )
 
   try {
    if(val==null){
        res.status(400).send({
            success:false,
            message:"organisation not exist"
        })
        
    }
    else{
        res.status(200).send({
            success:true,
            message:"fetched successfully",
            val
        })
    }
   } catch (error) {
    console.log(error)
    res.status(400).send({
        
        success:false,
        message:"error while fetching"
    })
   }
  }

//get by legal name
const getByLegalName=async(req,res)=>{
    const legalName=req.params.legalName
    const val = await organisationModel.find({"legalName":{  '$regex': legalName + '.*', '$options': 'i'}})
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
//get by INDUSTRY name
const getByIndustryName=async(req,res)=>{
    const industryName=req.params.industryName
    const val = await organisationModel.find({"industryName":{  '$regex': industryName + '.*', '$options': 'i'}})
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

//get by single url
const getAllInSingleUrl=async(req,res)=>{
    const legalName= req.params.get
    const industryName= req.params.get
    const address= req.params.get
    const val = await organisationModel.find({"legalName":{  '$regex': legalName + '.*', '$options': 'i'}})
    try {
        if (val.length!=0) {
            res.send(val)
        } else {
            const val = await organisationModel.find({"industryName":{  '$regex': industryName + '.*', '$options': 'i'}})
           if(val.length!=0){
            res.send(val)
           }else{
            const val = await organisationModel.find({"address":{  '$regex': address + '.*', '$options': 'i'}})
            if(val.length!=0){
                res.send(val)
            }else{
                res.send("No such data exist")
            }
           }
        }

    } catch (error) {
        res.send(error)
    }
   
  
}
    
const getByAllThree=async(req,res)=>{
    const legalName=req.params.legalName
    const industryName=req.params.industryName
    const address=req.params.address
    const val= await  organisationModel.find( {$and: [ {"legalName":{  '$regex': legalName + '.*', '$options': 'i'}},{"industryName":{  '$regex': industryName + '.*', '$options': 'i'}},{"address":{  '$regex': address + '.*', '$options': 'i'}}]}  )
    try {
        if(val==null){
            res.status(400).send({
                success:false,
                message:"organisation not exist"
            })
            
        }
        else{
            res.status(200).send({
                success:true,
                message:"fetched successfully",
                val
            })
        }
       } catch (error) {
        console.log(error)
        res.status(400).send({
            
            success:false,
            message:"error while fetching"
        })
       }
}
    
//get all 
const getAll=async(req,res)=>{
    const val=await organisationModel.find({})
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


module.exports={getAll,createOrgProfile,updateorgProfile,getByIndustryName,handleDelete,getAllInSingleUrl,getSingleOrg,getByLegalNameIndustryName,getByLegalName,getByAllThree}