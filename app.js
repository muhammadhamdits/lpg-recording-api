const cors = require('cors')
const express = require('express')
const routes = require('./routes')
const { appCallback } = require('./appHelper')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.SERVER_PORT, appCallback)