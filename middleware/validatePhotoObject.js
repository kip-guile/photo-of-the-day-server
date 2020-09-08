const { isEmpty } = require('../helpers/isEmpty')

exports.validatePhotoObject = (data) => {
  const errors = {}
  let { title, url, explanation, date } = data
  title = title || ''
  url = url || ''
  explanation = explanation || ''
  date = date || ''

  if (isEmpty(title)) errors.title = 'Title is required'
  if (isEmpty(url)) errors.url = 'Img Url is required'
  if (isEmpty(explanation)) errors.explanation = 'explanation is required'
  if (isEmpty(date)) errors.date = 'date cant be empty'

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  }
}
