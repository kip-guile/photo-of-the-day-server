const Movies = require('../models/movies')
const { validateMovieObject } = require('../middleware/validatePhotoObject')

const addMovie = (req, res) => {
  const { errors, valid } = validateMovieObject(req.body)
  if (!valid) return res.status(400).json(errors)
  const { title, image_url, review } = req.body

  Movies.findOne({ title }).then((movie) => {
    if (movie)
      return res.status(400).json({
        message: 'Movie already saved',
      })
    const newMovie = new Movies({
      title,
      review,
      image_url,
    })

    newMovie
      .save()
      .then((movie) => {
        return res.status(201).json(movie)
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message })
      })
  })
}

async function getMovies(req, res) {
  try {
    const movies = await Movies.find({})
    if (movies.length === 0) {
      return res.status(404).json({ message: 'no movies available' })
    }
    return res.status(200).json(movies)
  } catch {
    res.status(500).json(err.message)
  }
}

async function deleteMovie(req, res) {
  const id = req.params.movieId

  try {
    const photo = await Movies.findById({ _id: id })
    if (!photo) {
      return res.status(404).json({ message: 'movie doesnt exist' })
    }
    await Movies.deleteOne({ _id: id })
    const movies = await Movies.find({})
    return res.status(200).json(movies)
  } catch {
    return res.status(500).json({ message: err.message })
  }
}

async function updateMovie(req, res) {
  const id = req.params.movieId
  const { errors, valid } = validateMovieObject(req.body)
  if (!valid) return res.status(400).json(errors)
  const { title, image_url, review } = req.body
  const newMovie = {
    title,
    image_url,
    review,
  }

  try {
    const movie = await Movies.findById({ _id: id })
    if (!movie) {
      return res.status(404).json({ message: 'movie doesnt exist' })
    }

    const updatedMovie = await Movies.findOneAndUpdate(
      { _id: id },
      { $set: newMovie },
      { new: true }
    )
    return res.status(200).json(updatedMovie)
  } catch {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = { addMovie, getMovies, deleteMovie, updateMovie }
