const { Router } = require('express')
const router = new Router()

const restocks = require('./controllers/restocks')

router.get('/restocks', restocks.index)

module.exports = router