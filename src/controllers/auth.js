const Users = require('../services/UserService')

// @route   GET /auth/login
// @desc    Login user
const login = (req, res) => {
  const { email, password } = req.body

  // Validate email and password
  if (!email || !password) {
    return res
      .json({
        success: 'false',
        message: 'Please provide email and password!'
      })
      .status(400)
  }

  // Check for user
  const user = Users.findByEmail(email)

  if (!user) {
    return res
      .json({
        success: 'false',
        message: 'Invalid credentials!'
      })
      .status(401)
  }

  // Check if password matches
  const isMatch = user.password === password

  if (!isMatch) {
    return res
      .json({
        success: 'false',
        message: 'Invalid credentials!'
      })
      .status(401)
  }

  res
    .json({
      success: 'true',
      data: user
    })
    .status(200)
}

module.exports = {
  login,
}