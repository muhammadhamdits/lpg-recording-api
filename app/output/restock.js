const { arrayOutput, dateFormat } = require('./index')

const normalArray = (res, { status = 200, data }) => {
  output = arrayOutput(data, normalFormat)
  res.status(status).json(output)
}

const fullArray = (res, { status = 200, data }) => {
  output = arrayOutput(data, fullFormat)
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

const fullFormat = (data) => {
  return {
    id: data.id,
    date: dateFormat(data.date),
    quantity: data.quantity,
    totalDeliver: totalTransactionOutput(data.Transactions, 'deliver'),
    totalPickup: totalTransactionOutput(data.Transactions, 'pickup'),
    restFilled: restFilledOutput(data.Transactions, data.quantity),
    restEmpty: restEmptyOutput(data.Transactions, data.quantity)
  }
}

const totalTransactionOutput = (transactions, type) => {
  deliverTransactions = transactions.filter(transaction => transaction.type === type)
  return deliverTransactions.reduce((total, transaction) => total + transaction.quantity, 0)
}

const restFilledOutput = (transactions, restockQuantity) => {
  return restockQuantity - totalTransactionOutput(transactions, 'pickup')
}

const restEmptyOutput = (transactions, restockQuantity) => {
  restEmptyAfterRestock = totalTransactionOutput(transactions, 'deliver') - restockQuantity
  restEmptyAfterPickup = restEmptyAfterRestock - totalTransactionOutput(transactions, 'pickup')

  return restEmptyAfterPickup
}
  
module.exports = { fullArray, smallFormat }