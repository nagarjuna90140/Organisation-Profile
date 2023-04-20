const mongoose = require("mongoose");

const ContactOrganization = mongoose.Schema({
  legalname: {
    type: String,
    required: true,
  },
  contact_name: {
    type: String,
 
  },

  contact_email: {
    type: String,
 
  },

  designation: {
    type: String,
 
  },

  role: {
    type: String,
 
  },

  phone_number: {
    type: Number,
  },

  contact_additional_info: {
    type: String,
  },

  linkdin_url: {
    type: String,
 
  },

  facebook_url: {
    type: String,
 
  },

  other_urls: {
    type: String,
 
  },
});

module.exports = new mongoose.model("Contact-Organization", ContactOrganization);
