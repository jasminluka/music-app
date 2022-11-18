class UserService {
  constructor() {
    this.users = []
  }

  getAllUsers() {
    return this.users
  }
  
  getUserById(id) {
    const user = this.users.find((user) => user._id === id)

    if (!user) {
      return false
    }

    return user
  }

  findByEmail(email) {
    const user = this.users.find((user) => user.email === email)

    if (!user) {
      return false
    }

    return user
  }
  
  createUser(user) {
    user._id = this.users.length + 1
    
    this.users.push(user)

    return user
  }
  
  updateUser(id, newUser) {
    let userToUpdate = this.users.find((user) => user._id === id)
    
    if (!userToUpdate) {
      return false
    }

    userToUpdate = {
      ...userToUpdate,
      ...newUser
    }

    this.users = this.users.map((user) => user._id === id ? userToUpdate : user)

    return userToUpdate
  }
  
  deleteUser(id) {
    const user = this.users.find((user) => user._id === id)

    if (!user) {
      return false
    }

    this.users = this.users.filter((user) => user._id !== id)

    return user
  }
}

module.exports = new UserService()