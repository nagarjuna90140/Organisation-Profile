
const Organization = require("../../Models/Organization/Model-Organization");

const ErpvenderModel = require("../../Models/Organization/Model-ERPVender");

const IndustryModel = require("../../Models/Organization//Models-IndustryName");

const CreateOrganization = async (req, res, next) => {
  const { erpvender } = req.body;

  const check = await ErpvenderModel.findOne({ erpvender });
  if (check == null) {
    return res.send("ErpVender Data Not Matched");
  }

  const { industrysector } = req.body;
  const industry = await IndustryModel.findOne({ industrysector });

  if (industry == null) {
    return res.send("Industry Data Not Matched");
  }

  try {
    let org = new Organization({
      legalname: req.body.legalname,
      groupname: req.body.groupname,
      ermname: req.body.ermname,
      industrysector: req.body.industrysector,
      noofemployees: req.body.noofemployees,
      turnoverrange: req.body.turnoverrange,
      turnovervalue: req.body.turnovervalue,
      websiteurl: req.body.websiteurl,
      orgemail: req.body.orgemail,
      phonenumber: req.body.phonenumber,
      address: req.body.address,
      organization_aditional_info: req.body.organization_aditional_info,
      erpvender: req.body.erpvender,
      selector_year: req.body.selector_year,
      additional_info: req.body.additional_info,
    });

    try {
      const val = await org.save();
      res.send(val);
    } catch (error) {
      return console.log(error);
    }
  } catch (error) {
    return console.log(error);
  }
};

const alldetailesOrganization = async (req, res, next) => {
  let org;

  try {
    org = await Organization.find();
  } catch (error) {
    return console.log(error);
  }

  if (!org) {
    return res.status(404).json({ message: "Unable to get All Detailes", org });
  }

  return res.status(200).json({ message: "All Detailes Displayed", org });
};

const getOrganizationOne = async (req, res, next) => {
  let org;
  let id = req.params.id;
  try {
    org = await Organization.findById(id);
  } catch (error) {
    return console.log(error);
  }

  if (!org) {
    return res
      .status(404)
      .json({ message: `Unable to get ${id}  Detailes `, org });
  }

  return res
    .status(200)
    .json({ message: `Display Organization  id ${id} Detailes`, org });
};


//get by legalname
const getByLegalname = async (req, res, next) => {
  let org;
  let legalname = req.params.legalname;
  try {
    org = await Organization.find({"legalname":{"$regex":legalname+".*","$options":"i"}});
  } catch (error) {
    return console.log(error);
  }

  if (!org) {
    return res
      .status(404)
      .json({ message: `Unable to get ${legalname}  Detailes `, org });
  }

  return res
    .status(200)
    .json({ message: `Display Organization  id ${legalname} Detailes`, org });
};



// update Organization

const updateOrganization = async (req, res, next) => {
  let org;
  let id = req.params.id;
  console.log("uniq id"  ,id)
  // const {
  //   legalname,
  //   groupname,
  //   ermname,
  //   industrysector,
  //   noofemployees,
  //   turnoverrange,
  //   turnovervalue,
  //   websiteurl,
  //   orgemail,
  //   phonenumber,
  //   address,
  //   organization_aditional_info,
  //   erpvender,
  //   selector_year,
  //   additional_info,
  // } = req.body;

  try {
     org = await Organization.findById(id, {
      legalname :req.body.legalname,
      groupname:req.body. groupname,
      ermname:req.body. ermname,
      industrysector:req.body.industrysector,
      noofemployees:req.body.noofemployees,
      turnoverrange:req.body.turnoverrange,
      turnovervalue:req.body.turnovervalue,
      websiteurl:req.body.websiteurl,
      orgemail:req.body.orgemail,
      phonenumber:req.body.phonenumber,
      address:req.body.address,
      organization_aditional_info:req.body.organization_aditional_info,
      erpvender:req.body.erpvender,
      selector_year:req.body.selector_year,
      additional_info:req.body.additional_info,
    });



  } catch (error) {
    return console.log(error);
  }

  if (!org) {
    return res.status(404).json({ message: `Unable to Update ${id}` });
  }

  return res.status(201).json({ message: `Succesfully Updated ${id}`, org });
};

// delete id two organization

const deleteOrganizationOne = async (req, res, next) => {
  let org;
  let id = req.params._id;
  try {
    org = await Organization.findByIdAndDelete(id);
  } catch (error) {
    return console.log(error);
  }

  if (!org) {
    return res
      .status(404)
      .json({ message: `Unable to delete ${id}  Detailes `, org });
  }

  return res
    .status(200)
    .json({ message: `succesfully Organization  id ${id} Deleted`, org });
};



//  Organization Search   Detailes

const legalandOrganaization = async (req, res, next) => {
  let gettwoorg;
  try {

    gettwoorg = await Organization.find({$and:[{legalname:req.params.legalname} ,{industrysector:req.params.industrysector}]  })

  } catch (error) {
    console.log(error)
  }
  if (!gettwoorg) {
    return res
      .status(404)
      .json({ message: `Unable to Find Search the   Detailes `, gettwoorg });
  }

  return res
    .status(200)
    .json({ message: `succesfully`, gettwoorg });
  
};


//  3 Organization Search   Detailes

const getbylegal_industry_address = async (req, res, next) => {
const legalname = req.params.legalname;
const address = req.params.address;
const industrysector = req.params.industrysector
let getThree;
  try {

    getThree = await Organization.find({$and:[{"legalname":{"$regex":legalname+".*","$options":"i"}} ,{"industrysector":{"$regex":industrysector+".*","$options":"i"}},{"address":{"$regex":address+".*","$options":"i"}} ]  })

  } catch (error) {
    console.log(error)
  }
  if (getThree.length===0) {
    return res
      .status(404)
      .json({ message: `Unable to Find Search the   Detailes `, getThree });
  }

  return res
    .status(200)
    .json({ message: `succesfully`, getThree });
  
};








exports.CreateOrganization = CreateOrganization;

exports.alldetailesOrganization = alldetailesOrganization;

exports.getOrganizationOne = getOrganizationOne;

exports.updateOrganization = updateOrganization;

exports.deleteOrganizationOne = deleteOrganizationOne;


exports.legalandOrganaization = legalandOrganaization;

exports.getByLegalname = getByLegalname;

exports.getbylegal_industry_address = getbylegal_industry_address;


