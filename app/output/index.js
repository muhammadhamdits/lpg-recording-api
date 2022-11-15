const arrayOutput = (data, format) => {
  return data.map(d => format(d))
}

const dateFormat = (date) => {
  return date.toISOString().split('T')[0]
}

module.exports = { arrayOutput, dateFormat }