const mongoose = require("mongoose");

const bussinessOpertunity = mongoose.Schema({
  legalname: {
    type: String,
    required: true,
  },
  software_technology: {
    type: String,
    enum: ["javascript", "css", "python", "java"],
  },

  software_technology_additional_info: {
    type: String,
    
  },

  opertunity_type: {
    type: String,
    enum: [
      "Support",
      "Testing",
      "Cloude Computing",
      "Mern",
      "Java",
      "Sap",
      "c",
    ],
  },

  opertunity_status: {
    type: String,
    enum: ["open", "close", "cancel"],
  },

  opertunity_additional_info: {
    type: String,
  },

  month_year: {
    type: Date,

  },
});

module.exports = new mongoose.model("Bussiness-Opertuity", bussinessOpertunity);
