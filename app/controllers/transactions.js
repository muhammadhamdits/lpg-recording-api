const service = require('../services/transaction')
const input = require('../input')
const output = require('../output/transaction')

const indexInput = require('../input/transactions')
const createInput = require('../input/transactions/create')

const index = async (req, res) => {
  params = await input(indexInput)(req)
  if(params.errors) return output.plain(res, { status: 422, data: params})

  result = await service.index(params)

  output.normalArray(res, result)
}

const create = async (req, res) => {
  params = await input(createInput)(req)
  if(params.errors) return output.plain(res, { status: 422, data: params})

  result = await service.create(params)

  output.normalSingle(res, result)
}

module.exports = { index, create }