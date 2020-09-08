const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  explanation: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  media_type: {
    type: String,
    required: true,
    trim: true,
  },
})

const Photos = mongoose.model('user', photoSchema)
module.exports = Photos
