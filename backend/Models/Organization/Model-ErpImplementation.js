const mongoose = require("mongoose");

const ErpImplementationSchema = mongoose.Schema({
  legalname: {
    type: String,
    required: true,
  },

  partner_name: {
    type: String,
  },

  impl_year: {
    type: Number,
    default:Date.now()
  },

  partner_additional_info_1: {
    type: String,
  
  },

  partner_additional_info_2: {
    type: String,

  },
});

module.exports = new mongoose.model("ERP-IMPLEMENTATION", ErpImplementationSchema);
