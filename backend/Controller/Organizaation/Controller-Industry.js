const { response } = require("express");
const Industry = require("../../Models/Organization/Models-IndustryName");

const IndustryCreate = async (req, res, next) => {
  let erp;

  const { industrysector } = req.body;

  try {
    erp = new Industry({
      industrysector,
    });

    await erp.save();
  } catch (error) {
    return console.log(error);
  }

  if (!erp) {
    return res.status(404).json({ message: "Unable to Create" });
  }

  return res.status(201).json({ message: "Succfully Added", Industry });
};



const getAllIndustry = async (req,res,next) => {
  let industry;
  try {
    industry = await Industry.find();
  } catch (error) {
    console.log(error);
  }

  if (!industry) {
    return res.status(400).json({ message: "unable to Get all detailes" });
  }
  return res.status(200).json({ message: "All Industry Detailes", industry });
};










exports.IndustryCreate = IndustryCreate;
exports.getAllIndustry = getAllIndustry;

// IndustryCreate// exports.allErpDetailes = allErpDetailes
// exports.getErpdOne = getErpdOne
// exports.updateErp = updateErp
// exports.deleteErp = deleteErp
