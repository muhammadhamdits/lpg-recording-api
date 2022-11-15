const cors = require('cors')
const express = require('express')
const routes = require('./routes')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
routes(app)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})