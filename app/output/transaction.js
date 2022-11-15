const { arrayOutput } = require('./index')
const restockOutput = require('./restock')

const plain = (res, { status = 200, data }) => {
  res.status(status).json(data)
}

const normalArray = (res, { status = 200, data }) => {
  if(status !== 200) return plain(res, { status, data })

  output = arrayOutput(data, normalFormat)
  res.status(status).json(output)
}

const normalSingle = (res, { status = 200, data }) => {
  if(status !== 200) return plain(res, { status, data })
  
  res.status(status).json(normalFormat(data))
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
  
module.exports = { normalArray, plain, normalSingle }