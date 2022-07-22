const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  image_url: {
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
})

const Movies = mongoose.model('movies', movieSchema)
module.exports = Movies
