const { isEmpty } = require('../helpers/isEmpty')

// middleware to validate input
exports.validatePhotoObject = (data) => {
  const errors = {}
  let { title, url, explanation, date, media_type } = data
  title = title || ''
  url = url || ''
  explanation = explanation || ''
  date = date || ''
  media_type = media_type || ''

  if (isEmpty(title)) errors.title = 'Title is required'
  if (isEmpty(media_type)) errors.media_type = 'media_type is required'
  if (isEmpty(url)) errors.url = 'Img Url is required'
  if (isEmpty(explanation)) errors.explanation = 'explanation is required'
  if (isEmpty(date)) errors.date = 'date cant be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}

exports.validateMovieObject = (data) => {
  const errors = {}
  let { title, image_url, review } = data
  title = title || ''
  image_url = image_url || ''
  review = review || ''

  if (isEmpty(title)) errors.title = 'Title is required'
  if (isEmpty(image_url)) errors.image_url = 'Img Url is required'
  if (isEmpty(review)) errors.review = 'review is required'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}
