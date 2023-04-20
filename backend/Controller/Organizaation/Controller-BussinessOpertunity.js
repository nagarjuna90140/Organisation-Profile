
const BussinessOpertunity = require("../../Models/Organization/Model-BussinessOpertunity");

const Organizaation = require("../../Models/Organization/Model-Organization");

//console.log(Organizaation);

const createbussiness = async (req, res, next) => {
  const { legalname } = req.body;

  const legalnamecheck = await Organizaation.findOne({ legalname });
  console.log(legalname);
  if (legalnamecheck == null) {
    return res.send("legal name not matched");
  }

  let bussiness;

  //console.log(BussinessOpertunity);

  try {
    bussiness = new BussinessOpertunity({
      legalname: req.body.legalname,
      software_technology: req.body.software_technology,
      software_technology_additional_info:
        req.body.software_technology_additional_info,
      opertunity_type: req.body.opertunity_type,
      opertunity_status: req.body.opertunity_status,
      opertunity_additional_info: req.body.opertunity_additional_info,
      month_year: req.body.month_year,
    });

    await bussiness.save();
  } catch (error) {
    return console.log(error);
  }

  if (!bussiness) {
    return res
      .status(500)
      .json({ message: "Unable to add the bussiness Detailes" });
  }

  return res.status(201).json({message:`Succesfully Created Bussiness Detailes`},bussiness);
};

//get all bussiness Detailes

const getallbussinessDetailes = async (req, res, next) => {
  let bussiness;

  try {
    bussiness = await BussinessOpertunity.find();
  } catch (error) {
    return console.log(error);
  }

  if (!bussiness) {
    return res
      .status(404)
      .json({ message: "Unable to Get All Contatc Detailes" });
  }

  return res
    .status(200)
    .json({ message: `All Getting bussiness Information Detailes`, bussiness });
};

// get one bussiness id information

const getbussinessOne = async (req, res, next) => {
  const bussiness = await BussinessOpertunity.findOne({
    software_technology: req.params.software_technology,
  });

  try {
    res.send(bussiness);
  } catch (error) {
    res.send(error);
  }
};

const bussinessUpdate = async (req, res, next) => {
  let bussiness;
  let id = req.params.id;

  console.log("uniq id" +id);

  try {
    bussiness = await BussinessOpertunity.findById(id, {
      legalname: req.body.legalname,
      software_technology: req.body.software_technology,
      software_technology_additional_info:
        req.body.software_technology_additional_info,
      opertunity_type: req.body.opertunity_type,
      opertunity_status: req.body.opertunity_status,
      opertunity_additional_info: req.body.opertunity_additional_info,
      month_year: req.body.month_year,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!bussiness) {
    return res.status(404).json({ message: `Unable to Update ${id}` });
  }

  return res
    .status(201)
    .json({ message: `bussiness Detailes Updates ${id}`, bussiness });
};

// delete bussiness Detailes

const bussinessDelete = async (req, res, next) => {
  let bussiness;
  let id = req.params.id;

  try {
    bussiness = await BussinessOpertunity.findByIdAndDelete(id);
  } catch (error) {
    return console.log(error);
  }

  if (!bussiness) {
    return res.status(404).json({ message: `Unable to Delete`, bussiness });
  }
  return res
    .status(200)
    .json({ message: `Succesfully bussiness Detailes Deleted ${id}` });
};

//  bussiness Search   Detailes



const bussinessSearch = async(req,res,next) =>{
  let search ;
  
  try {
    search = await BussinessOpertunity.find({software_technology:req.params.software_technology})
  } catch (error) {
    return console.log(error)
  }

  if(!search){
    return res.status(404).json({message:`Unable to Find the Search`})
  }

  return res.status(200).json({message:"Yes Avalible",search})
}





const bussinesssoftwareopertunity = async(req,res,next) =>{
  let search ;
  
  try {
    search = await BussinessOpertunity.find({$and:[{software_technology:req.params.software_technology},{opertunity_type:req.params.opertunity_type}]})
  } catch (error) {
    return console.log(error)
  }

  if(!search){
    return res.status(404).json({message:`Unable to Find the Search`})
  }

  return res.status(200).json({message:"Yes Avalible",search})



}






const bussinessopertunitype = async(req,res,next) =>{
  let search ;
  
  try {
    search = await BussinessOpertunity.find({$and:[{opertunity_type:req.params.opertunity_type}]})
  } catch (error) {
    return console.log(error)
  }

  if(!search){
    return res.status(404).json({message:`Unable to Find the Search`})
  }

  return res.status(200).json({message:"Yes Avalible",search})



}



















exports.createbussiness = createbussiness
// all bussiness information
exports.getallbussinessDetailes = getallbussinessDetailes;

// get one bussiness idinformation
exports.getbussinessOne = getbussinessOne

// update bussiness Detailes

exports.bussinessUpdate = bussinessUpdate

exports.bussinessDelete = bussinessDelete

exports.bussinessSearch = bussinessSearch

exports.bussinesssoftwareopertunity = bussinesssoftwareopertunity

exports.bussinessopertunitype = bussinessopertunitype

