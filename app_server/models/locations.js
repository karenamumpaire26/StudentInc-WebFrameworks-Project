const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
  days: String,
  opening: String,
  closing: String,
  closed: Boolean
});

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: { type: Number, min: 1, max: 5 },
  reviewText: String,
  timestamp: { type: Date, default: Date.now }
});

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  facilities: [String],
  coords: {
    lat: { type: Number },
    lng: { type: Number }
  },
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema],
  rating: Number
});

module.exports = mongoose.model('Location', locationSchema);
