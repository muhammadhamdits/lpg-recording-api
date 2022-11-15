const { arrayOutput } = require('./index')
const restockOutput = require('./restock')

const plain = (res, { status = 200, data }) => {
  res.status(status).json(data)
}

const normal = (res, { status = 200, data }) => {
  if(status === 500) return plain(res, { status, data })

  output = arrayOutput(data, normalFormat)
  res.status(status).json(output)
}

const normalFormat = (data) => {
  return {
    id: data.id,
    customerName: data.customerName,
    quantity: data.quantity,
    date: data.created_at,
    type: data.type,
    restock: restockOutput.smallFormat(data.Restock)
  }
}
  
module.exports = { normal }