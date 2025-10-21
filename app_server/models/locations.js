const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

mongoose.model('Building', buildingSchema);

