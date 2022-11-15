const Sequelize = require('sequelize')
const Op = Sequelize.Op
const Transaction = require('../../models').Transaction
const Restock = require('../../models').Restock
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

const create = async (params) => {
  try {
    const restock = await Restock.findByPk(params.restockId)
    if(!restock) return { status: 404, data: { message: 'Restock not found' } }

    const transaction = Transaction.create(params)
    const outputData = { ...transaction, Restock: restock }

    return { data: outputData }
  } catch (error) {
    return { status: 500, data: error }
  }
}

module.exports = { index, create }