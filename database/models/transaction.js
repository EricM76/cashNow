'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Payment,{
        as: "origen",
        foreignKey : "source"
      })
      Transaction.belongsTo(models.Payment,{
        as: "destino",
        foreignKey : "target"
      })
    }
  };
  Transaction.init({
    source: DataTypes.INTEGER,
    target: DataTypes.INTEGER,
    perception: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};