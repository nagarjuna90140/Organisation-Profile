const mongoose = require("mongoose");

const AmsparnerSchema = mongoose.Schema({
  legalname: {
    type: String,
    required: true,
  },

  partner_name: {
    type: String,
    trim:2
  },
  ams_expire_month_year: {
    type: Date,
    default: Date.now
    
  },
  partner_additional_info_1: {
    type: String,
  },

  partner_additional_info_2: {
    type: String,
  },
});



module.exports = new mongoose.model("AMS-PARTNER",AmsparnerSchema);


