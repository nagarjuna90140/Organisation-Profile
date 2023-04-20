const ErpImplement = require("../../Models/Organization/Model-ErpImplementation");

const Organizaation = require("../../Models/Organization/Model-Organization");

// creat ERP IMPLEMENTATION  
const createErpImplement = async (req, res, next) => {
  const { legalname } = req.body;

  let legalnamecheck = await Organizaation.findOne({ legalname });
  if (legalnamecheck == null) {
    return res
      .status(500)
      .json({ message: "No legal not found", legalnamecheck });
  }

  let erp;

  try {
    erp = new ErpImplement({
      legalname: req.body.legalname,
      partner_name: req.body.partner_name,
      impl_year: req.body.impl_year,
      partner_additional_info_1: req.body.partner_additional_info_1,
      partner_additional_info_2: req.body.partner_additional_info_2,
    });
    await erp.save();
  } catch (error) {
    return console.log(error);
  }

  if (!erp) {
    return res.status(500).json({ message: `Unable to Create AMS Detailes` });
  }

  return res.status(201).json({ message: `Succesfuly Created ERP IMPLEMENTATION DETALES`, erp });
};

// all Erp Implementation detailes

const getAllErpImplementationDetailes = async (req, res, next) => {
  let erp;

  try {
    erp = await ErpImplement.find();
  } catch (error) {
    return console.log(error);
  }

  if (!erp) {
    return res.status(404).json({ message: "Unable to create erp detailes " });
  }

  return res.status(200).json({ message: `All ERP IMPLEMENTATIO DETAILES`, erp });
};

// get erp implementation  id detailes
const getErpImplememntationId = async (req, res, next) => {
  let erp;

  let id = req.params.id;
  try {
    erp = await ErpImplement.findOne({ _id: id });
  } catch (error) {
    console.log(error);
  }

  if (!erp) {
    return res.status(201).json({ message: "Unable to Display the Data" });
  }
  return res.status(200).json({ message: `Get by ${id} ERP Implementation  DETAILES`, erp });
};

// update the erp imlementation detailes   id

const ErpImplementUpdate = async (req, res, next) => {
  let erp;
  const id = req.params.id;

  try {
    erp = await ErpImplement.findById(id, {
      legalname: req.body.legalname,
      partner_name: req.body.partner_name,
      impl_year: req.body.impl_year,
      partner_additional_info_1: req.body.partner_additional_info_1,
      partner_additional_info_2: req.body.partner_additional_info_2,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!erp) {
    return res.status(404).json({ message: `Unable to Update the ${id}` });
  }

  return res.status(200).json({ message: `Succesfully Update the ${id}`, erp });
};

//  delete erp detailes

const deleteErpImplementation  = async (req, res, next) => {
  let erp;

  let id = req.params.id;
  try {
    erp = await ErpImplement.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }

  if (!erp) {
    return res
      .status(201)
      .json({ message: `Unable to Display the Data ${id}` });
  }
  return res
    .status(200)
    .json({ message: `Succesfully Deleted ${id} AMS DETAILES`, erp });
};






// creat ams partner Data
exports.createErpImplement = createErpImplement;

// all Erp Implementation detailes

exports.getAllErpImplementationDetailes = getAllErpImplementationDetailes;

//  get by erp implentation One id 

exports.getErpImplememntationId = getErpImplememntationId;

// delete erp implementation

exports.deleteErpImplementation = deleteErpImplementation;

// Erp update
exports.ErpImplementUpdate = ErpImplementUpdate;

// 

