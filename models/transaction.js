'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.Restock, { foreignKey: 'restockId' })
    }
  }
  Transaction.init({
    customerName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    type: DataTypes.ENUM('deliver', 'pickup')
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Transaction',
  })

  return Transaction
}