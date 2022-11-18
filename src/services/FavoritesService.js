class FavoritesService {
  constructor() {
    this.favorites = []
  }

  getAllFavorites() {
    return this.favorites
  }

  getAllFavoritesForUser(userId) {
    return this.favorites.filter((favorite) => favorite.userId === userId)
  }
  
  getFavoriteById(id) {
    const favorite = this.favorites.find((favorite) => favorite._id === id)

    if (!favorite) {
      return false
    }

    return favorite
  }
  
  addToFavorites(song) {
    song._id = this.favorites.length + 1

    this.favorites.push(song)

    return song
  }
  
  updateFavorite(id, newFavorite) {
    let favoriteToUpdate = this.favorites.find((favorite) => favorite._id === id)
    
    if (!favoriteToUpdate) {
      return false
    }

    favoriteToUpdate = {
      ...favoriteToUpdate,
      ...newFavorite
    }

    this.favorites = this.favorites.map((favorite) => favorite._id === id ? favoriteToUpdate : favorite)

    return favoriteToUpdate
  }
  
  deleteFavorite(id) {
    const favorite = this.favorites.find((favorite) => favorite._id === id)

    if (!favorite) {
      return false
    }

    this.favorites = this.favorites.filter((favorite) => favorite._id !== id)

    return favorite
  }
}

module.exports = new FavoritesService()