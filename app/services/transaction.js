const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Transaction = require('../../models').Transaction
const { deleteProp } = require('./index')

const index = async (params) => {
  try {
    const { filteredParams, customerName } = deleteProp(params, 'customerName')
    let whereParams = { ...filteredParams }
    if(customerName) whereParams['customerName'] = { [Op.like]: `%${customerName}%` }

    const transactions = await Transaction.findAll({
      where: whereParams,
      include: ['Restock']
    })

    return { data: transactions }
  } catch (error) {
    return { status: 500, data: error }
  }
}

module.exports = { index }