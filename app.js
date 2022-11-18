const express = require('express')
const cors = require('cors')
require('dotenv').config()

const routes = require('./src/routes')

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (_, res) => res.send('API RUNNING!'))
app.use(routes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))