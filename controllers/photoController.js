const Photos = require('../models/photos')
const { validatePhotoObject } = require('../middleware/validatePhotoObject')

// controller to add photo
const addPhoto = (req, res) => {
  const { errors, valid } = validatePhotoObject(req.body)
  if (!valid) return res.status(400).json(errors)
  const { title, url, explanation, date } = req.body

  Photos.findOne({ date }).then((photo) => {
    if (photo)
      return res.status(400).json({
        message: 'Photo already saved',
      })
    const newPhoto = new Photos({
      title,
      explanation,
      url,
      date,
      media_type,
    })

    newPhoto
      .save()
      .then((photo) => {
        return res.status(201).json(photo)
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message })
      })
  })
}

// controller to get all photos
async function getPhotos(req, res) {
  try {
    const photos = await Photos.find({})
    if (photos.length === 0) {
      return res.status(404).json({ message: 'no photos available' })
    }
    return res.status(200).json(photos)
  } catch {
    res.status(500).json(err.message)
  }
}

// controller to delete photo
async function deletePhoto(req, res) {
  const date = req.params.photoId

  try {
    const photo = await Photos.findOne({ date })
    if (!photo) {
      return res.status(404).json({ message: 'photo doesnt exist' })
    }
    await Photos.deleteOne({ date })
    const photos = await Photos.find({})
    return res.status(200).json(photos)
  } catch {
    return res.status(500).json({ message: err.message })
  }
}

module.exports = { deletePhoto, addPhoto, getPhotos }
