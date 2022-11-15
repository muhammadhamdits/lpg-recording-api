const { Router } = require('express')
const router = new Router()

const restocks = require('./app/controllers/restocks')
const transactions = require('./app/controllers/transactions')

router.get('/restocks', restocks.index)

router.get('/transactions', transactions.index)

module.exports = router