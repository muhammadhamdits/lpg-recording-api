const service = require('../services/transaction')
const input = require('../input')
const output = require('../output/transaction')

const indexInput = require('../input/transactions')

const index = async (req, res) => {
  params = await input(indexInput)(req)
  if(params.errors) return res.status(422).json(params)

  result = await service.index(params)

  output.normal(res, result)
}

module.exports = { index }