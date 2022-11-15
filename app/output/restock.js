const { arrayOutput, dateFormat } = require('./index')

const normal = (res, { status = 200, data }) => {
  output = arrayOutput(data, normalFormat)
  res.status(status).json(output)
}

const normalFormat = (data) => {
  return {
    id: data.id,
    date: dateFormat(data.date),
    quantity: data.quantity
  }
}
  
module.exports = { normal }