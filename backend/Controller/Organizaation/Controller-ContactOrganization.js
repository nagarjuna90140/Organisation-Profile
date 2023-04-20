const ContactOrganization = require("../../Models/Organization/Model-ContactOrganization");

const Organizaation = require("../../Models/Organization/Model-Organization");

const createContact = async (req, res, next) => {
  const { legalname } = req.body;

  const legalnamecheck = await Organizaation.findOne({ legalname });
  if (legalnamecheck == null) {
    return res.send("legal name not matched");
  }

  let contact;

  try {
    contact = new ContactOrganization({
      legalname: req.body.legalname,
      contact_name: req.body.contact_name,
      contact_email: req.body.contact_email,
      designation: req.body.designation,
      role: req.body.role,
      phone_number: req.body.phone_number,
      contact_additional_info: req.body.contact_additional_info,
      linkdin_url: req.body.linkdin_url,
      facebook_url: req.body.facebook_url,
      other_urls: req.body.other_urls,
    });

    await contact.save();
  } catch (error) {
    return console.log(error);
  }

  if (!contact) {
    return res
      .status(500)
      .json({ message: "Unable to add the Contact Detailes" });
  }

  return res.status(201).json(contact);
};

//get all Contact Detailes

const getallContactDetailes = async (req, res, next) => {
  let contact;

  try {
    contact = await ContactOrganization.find();
  } catch (error) {
    return console.log(error);
  }

  if (!contact) {
    return res
      .status(404)
      .json({ message: "Unable to Get All Contatc Detailes" });
  }

  return res
    .status(200)
    .json({ message: `All Getting Contact Information Detailes`, contact });
};

// get one contact id information

const getContactOne = async (req, res, next) => {
  const contact = await ContactOrganization.findOne({
    id: req.params.id,
  });

  try {
    res.send(contact);
  } catch (error) {
    res.send(error);
  }
};

const contactUpdate = async (req, res, next) => {
  let contact;
  let id = req.params.id;

  try {
    contact = await ContactOrganization.findById(id, {
      legalname: req.body.legalname,
      contact_name: req.body.contact_name,
      contact_email: req.body.contact_email,
      designation: req.body.designation,
      role: req.body.role,
      phone_number: req.body.phone_number,
      contact_additional_info: req.body.contact_additional_info,
      linkdin_url: req.body.linkdin_url,
      facebook_url: req.body.facebook_url,
      other_urls: req.body.other_urls,
    });
  } catch (error) {
    return console.log(error);
  }

  if (!contact) {
    return res.status(404).json({ message: `Unable to Update ${id}` });
  }
  
  return res
    .status(201)
    .json({ message: `Contact Detailes Updates ${id}`, contact });
};



// delete Contact Detailes

const contactDelete = async (req, res, next) => {
  let contact;
  let id = req.params.id;

  try {
    contact = await ContactOrganization.findByIdAndDelete(id);
  } catch (error) {
    return console.log(error);
  }

  if (!contact) {
    return res.status(404).json({ message: `Unable to Delete`, contact });
  }
  return res
    .status(200)
    .json({ message: `Succesfully Contact Detailes Deleted ${id}`});
};
















exports.createContact = createContact;
// all Contact information
exports.getallContactDetailes = getallContactDetailes;

// get one contact idinformation
exports.getContactOne = getContactOne;

// update Contact Detailes

exports.contactUpdate = contactUpdate;

exports.contactDelete = contactDelete;
