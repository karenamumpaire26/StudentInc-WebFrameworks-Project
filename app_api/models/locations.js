const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
  days: { type: String, required: true },
  opening: String,
  closing: String,
  closed: { type: Boolean, required: true }
});

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: { type: Number, required: true, min: 1, max: 5 },
  reviewText: String,
  timestamp: { type: Date, default: Date.now }
});

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  facilities: [String],
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
});

module.exports = mongoose.model('Location', locationSchema);
