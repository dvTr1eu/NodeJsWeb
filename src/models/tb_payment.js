"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_payment extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_payment.init(
    {
      id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      amount: DataTypes.DECIMAL(8, 2),
      payment_date: DataTypes.DATE,
      payment_method: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_payment",
    }
  );
  return tb_payment;
};
