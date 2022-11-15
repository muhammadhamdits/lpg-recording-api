const cors = require('cors')
const express = require('express')
const routes = require('./routes')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.SERVER_PORT, () => {
  serverHostAndPort = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
  message = `Server is running on ${serverHostAndPort}`
  console.log(message)
})