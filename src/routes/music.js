const router = require('express').Router()

const { search } = require('../controllers/music')

router
  .route('/search')
  .get(search)

module.exports = router
