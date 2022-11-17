const service = require('../services/restock')
const input = require('../input')
const output = require('../output/restock')

const indexInput = require('../input/restocks')

const index = async (req, res) => {
  params = await input(indexInput)(req)
  if(params.errors) return res.status(422).json(params)

  result = await service.index(params)

  output.fullArray(res, result)
}

module.exports = { index }