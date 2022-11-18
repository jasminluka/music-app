const router = require('express').Router()

const authRoutes = require('./auth')
const musicRoutes = require('./music')
const userRoutes = require('./users')
const favoriteRoutes = require('./favorites')

router.use('/auth', authRoutes)
router.use('/music', musicRoutes)
router.use('/users', userRoutes)
router.use('/favorites', favoriteRoutes)

module.exports = router