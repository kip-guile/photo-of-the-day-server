const router = require('express').Router()
const {
  addMovie,
  deleteMovie,
  getMovies,
  updateMovie,
} = require('../controllers/movieController')

router.get('/', getMovies)

router.post('/', addMovie)

router.delete('/:movieId', deleteMovie)

router.put('/:movieId', updateMovie)

module.exports = router
