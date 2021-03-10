// our Controller that deals with all products


var express = require('express')
var ItemRouter = express.Router()
// middleware that is specific to this ItemRouter
ItemRouter.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
ItemRouter.get('/', async function (req, res) {
  res.send({some: 'nheck console'})
})

// define the about route
ItemRouter.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = ItemRouter
