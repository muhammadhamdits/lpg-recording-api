'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Restock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Restock.hasMany(models.Transaction, { foreignKey: 'restockId' })
    }
  }
  
  Restock.init({
    date: DataTypes.DATE,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Restock',
  })
  
  return Restock
}