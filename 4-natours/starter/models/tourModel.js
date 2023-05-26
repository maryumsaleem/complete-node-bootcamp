const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Tour must have a Name!"],
    // unique: [true, "A Tour Must have a Unique Name!"],
    trim: true
  },
  duration: {
    type: Number,
    required: [true, "A Tour must have"]
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A Tour must have"]
  },
  difficulty: {
    type: String,
    required: [true, "A Tour must have a Difficulty"]
  },
  rating: {
    type: Number,
    default: 4.5
  },
  ratingsAveraged: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, "A Tour must have a Price"]
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, "A Tour must have a Price"]
  },
  description:{
    type: String,
    trim: true
  },
  imageCover:{
    type: String,
    required: [true, "A Tour must have a imageCover"]
  },
  images:[String],
  createdAt:{
    type: Date,
    default: Date.now()
  },
  startsDate:[Date]
});

const Tour = mongoose.model("Tour", tourSchema);
module.exports = Tour;