const mongoose = require("mongoose");

const UserRegistration = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  phonenumber: {
    type: Number,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Registration", UserRegistration);
