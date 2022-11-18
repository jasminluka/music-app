const router = require('express').Router()

const {
  getAllFavorites,
  getAllFavoritesForUser,
  getFavoriteById,
  addToFavorites,
  updateFavorite,
  deleteFavorite,
} = require('../controllers/favorites')

router
  .route('/')
  .get(getAllFavorites)
  
router
  .route('/users/:userId')
  .get(getAllFavoritesForUser)
  .post(addToFavorites)


router
  .route('/:id')
  .get(getFavoriteById)
  .patch(updateFavorite)
  .delete(deleteFavorite)

module.exports = router
