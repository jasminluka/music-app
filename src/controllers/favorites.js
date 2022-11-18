const Favorites = require('../services/FavoritesService')

// @route   GET /favorites
// @desc    Get all favorites
const getAllFavorites = (_, res) => {
  const favorites = Favorites.getAllFavorites()

  res
    .json({
      success: 'true',
      data: favorites
    })
    .status(200)
}

// @route   GET /favorites/users/:userId
// @desc    Get all favorites for a specific user
const getAllFavoritesForUser = (req, res) => {
  const { userId } = req.params

  const favorites = Favorites.getAllFavoritesForUser(+userId)

  res
    .json({
      success: 'true',
      data: favorites
    })
    .status(200)
}

// @route   GET /favorites/:id
// @desc    Get a single favorite
const getFavoriteById = (req, res) => {
  const { id } = req.params

  const favorite = Favorites.getFavoriteById(+id)

  if (!favorite) {
    return res
      .json({
        success: 'false',
        message: 'Not found!'
      })
      .status(404)
  }

  res
    .json({
      success: 'true',
      data: favorite
    })
    .status(200)
}

// @route   POST /favorites/users/:userId
// @desc    Add to user favorites
const addToFavorites = (req, res) => {
  const { userId } = req.params
  const song = Favorites.addToFavorites({ ...req.body, userId: +userId })

  res
    .json({
      success: 'true',
      data: song
    })
    .status(201)
}

// @route   PATCH /favorites/:id
// @desc    Update a favorite
const updateFavorite = (req, res) => {
  const { id } = req.params

  const favorite = Favorites.updateFavorite(+id, req.body)

  if (!favorite) {
    return res
      .json({
        success: 'false',
        message: 'Not found!'
      })
      .status(404)
  }

  res
    .json({
      success: 'true',
      data: favorite
    })
    .status(200)
}

// @route   DELETE /favorites/:id
// @desc    Delete a favorite
const deleteFavorite = (req, res) => {
  const { id } = req.params

  const favorite = Favorites.deleteFavorite(+id)

  if (!favorite) {
    return res
      .json({
        success: 'false',
        message: 'Not found!'
      })
      .status(404)
  }

  res
    .json({
      success: 'true',
      data: favorite
    })
    .status(200)
}

module.exports = {
  getAllFavorites,
  getAllFavoritesForUser,
  getFavoriteById,
  addToFavorites,
  updateFavorite,
  deleteFavorite,
}