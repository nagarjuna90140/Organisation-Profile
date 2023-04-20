const { response } = require("express");
const ERP = require("../../Models/Organization/Model-ERPVender");

const CreateErp = async (req, res, next) => {
  let erp;

  const {
    
    erpvender,
   
  } = req.body;

  try {
    erp = new ERP({
     
      erpvender,
      
    });

    await erp.save();
  } catch (error) {
    return console.log(error);
  }

  if (!erp) {
    return res.status(404).json({ message: "Unable to Create" });
  }

  return res.status(201).json({ message: "Succfully Added", erp });
};

const allErpDetailes = async (req, res, next) => {
  let erp;

  try {
    erp = await ERP.find();
  } catch (error) {
    return console.log(error);
  }

  if (!erp) {
    return res.status(404).json({ message: "Unable to get All Detailes", erp });
  }

  return res.status(200).json({ message: "All Detailes Displayed", erp });
};




const getErpdOne = async (req, res, next) => {
    let org;
  let id = req.params.id
    try {
      org = await ERP.findById(id);
    } catch (error) {
      return console.log(error);
    }
  
    if (!org) {
      return res.status(404).json({ message:`Unable to get ${id}  Detailes `, org });
    }
  
    return res.status(200).json({ message: `Display erp  id ${id} Detailes`, org });
  };
  







// update Organization 



const updateErp = async (req, res, next) => {
    let org;
  let id = req.params.id
    const {
     o,
      erpvender,
    
    } = req.body;
  
    try {
      org = await ERP.findById(id,{
       
        erpvender,
       
      });
  
      await org.save();
    } catch (error) {
      return console.log(error);
    }
  
    if (!org) {
      return res.status(404).json({ message: `Unable to Update ${id}` });
    }
  
    return res.status(201).json({ message: `Succesfully Updated ${id}`, org });
  };
  



// delete id two organization 


const deleteErp = async (req, res, next) => {
    let org;
  let id = req.params.id
    try {
      org = await ERP.findByIdAndDelete(id);
    } catch (error) {
      return console.log(error);
    }
  
    if (!org) {
      return res.status(404).json({ message:`Unable to delete ${id}  Detailes `, org });
    }
  
    return res.status(200).json({ message: `succesfully Organization  id ${id} Deleted`, org });
  };
  





exports.CreateErp = CreateErp
exports.allErpDetailes = allErpDetailes
exports.getErpdOne = getErpdOne
exports.updateErp = updateErp
exports.deleteErp = deleteErp