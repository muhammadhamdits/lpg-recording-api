const { arrayOutput, dateFormat } = require('./index')

const normalArray = (res, { status = 200, data }) => {
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

const smallFormat = (data) => {
  return {
    id: data.id,
    date: dateFormat(data.date)
  }
}
  
module.exports = { normalArray, smallFormat }