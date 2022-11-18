const axios = require('axios')

// @route   GET /music/search?query=eminem
// @desc    Search songs
const search = async (req, res) => {
  const { query } = req.query

  const options = {
    params: {
      query
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  }
  
  try {
    const { data } = await axios.get('https://youtube-music1.p.rapidapi.com/v2/search', options)
  
    res
      .json({
        success: 'true',
        data: data?.result?.songs || []
      })
      .status(200)
  } catch (err) {
    res
      .json({
        success: 'false',
        message: 'Server error!'
      })
      .status(500)
  }
}

module.exports = {
  search,
}