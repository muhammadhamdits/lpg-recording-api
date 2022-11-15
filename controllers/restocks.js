const service = require('../services/restock')
const input = require('../input')
const output = require('../output/restock')

const indexInput = require('../input/restocks')

const index = async (req, res, next) => {
  errors = await input(indexInput)(req, res, next)
  if(errors) return

  resultData = await service.index(req.inputData)
  outputData = output.plainFormat(resultData)
  
  return res.json(outputData)
}

module.exports = { index }