const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
  },
  lastname: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
  },
  phonenumber: {
    type: String,
    maxlength: 10,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

module.exports.Customer = Customer = mongoose.model("Customer", customerSchema);
