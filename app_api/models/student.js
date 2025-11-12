const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  tNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^T[0-9]{8}$/
  },
  fullName: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Student', studentSchema);
