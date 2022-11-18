const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require('../controllers/users')

router
  .route('/')
  .get(getAllUsers)
  .post(addUser)

router
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser)

module.exports = router
