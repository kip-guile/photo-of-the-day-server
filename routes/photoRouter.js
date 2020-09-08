const router = require('express').Router()
const {
  addPhoto,
  deletePhoto,
  getPhotos,
} = require('../controllers/photoController')

// @route GET api/photos
// @desc Get all photos
// @access Public
router.get('/', getPhotos)

// @route POST api/photos
// @desc Add a photo
// @access Public
router.post('/', addPhoto)

// @route DELETE api/:photoId
// @desc Delete a photo
// @access Public
router.delete('/:photoId', deletePhoto)

module.exports = router
