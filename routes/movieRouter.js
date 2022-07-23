const router = require('express').Router()
const {
  addMovie,
  deleteMovie,
  getMovies,
  updateMovie,
  getMovieById,
} = require('../controllers/movieController')

router.get('/', getMovies)

router.post('/', addMovie)

router.get('/:movieId', getMovieById)

router.delete('/:movieId', deleteMovie)

router.put('/:movieId', updateMovie)

module.exports = router
