require('dotenv').config()
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const mongoURI = require('../config/keys')
const mongoose = require('mongoose')

//photo route
const photoRouter = require('../routes/photoRouter')

//initializations
const server = express()
server.use(helmet())
server.use(logger)
server.use(express.json())
server.use(
  cors({
    origin: ['http://localhost:3000', 'https://photo-of-the-day.vercel.app'],
    credentials: true,
  })
)

server.use('/api/photos', photoRouter)

//connect to mongodb
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((conn) =>
    console.log(`MongoDB plugged in just fine: ${conn.connection.host}`)
  )
  .catch((err) => console.log(err))

server.get('/', (req, res) => {
  return res.status(200).json({ message: 'API is up 🚀' })
})

//logger function
function logger(req, res, next) {
  console.log(`${req.method} to ${req.originalUrl}`)
  next()
}

server.all('*', (req, res) => {
  res.status(404).json({ message: 'This URL can not be found' })
})

module.exports = server
