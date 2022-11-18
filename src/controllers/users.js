const Users = require('../services/UserService')

// @route   GET /users
// @desc    Get all users
const getAllUsers = (_, res) => {
  const users = Users.getAllUsers()

  res
    .json({
      success: 'true',
      data: users
    })
    .status(200)
}

// @route   GET /users/:id
// @desc    Get a single user
const getUserById = (req, res) => {
  const { id } = req.params

  const user = Users.getUserById(+id)

  if (!user) {
    return res
      .json({
        success: 'false',
        message: 'User does not exist!'
      })
      .status(404)
  }

  res
    .json({
      success: 'true',
      data: user
    })
    .status(200)
}

// @route   POST /users
// @desc    Create a user
const addUser = (req, res) => {
  const user = Users.createUser(req.body)

  res
    .json({
      success: 'true',
      data: user
    })
    .status(201)
}

// @route   PATCH /users/:id
// @desc    Update a user
const updateUser = (req, res) => {
  const { id } = req.params

  const user = Users.updateUser(+id, req.body)

  if (!user) {
    return res
      .json({
        success: 'false',
        message: 'User does not exist!'
      })
      .status(404)
  }

  res
    .json({
      success: 'true',
      data: user
    })
    .status(200)
}

// @route   DELETE /users/:id
// @desc    Delete a user
const deleteUser = (req, res) => {
  const { id } = req.params

  const user = Users.deleteUser(+id)

  if (!user) {
    return res
      .json({
        success: 'false',
        message: 'User does not exist!'
      })
      .status(404)
  }

  res
    .json({
      success: 'true',
      data: user
    })
    .status(200)
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
}