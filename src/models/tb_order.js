"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_order extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_order.init(
    {
      id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      total_amount: DataTypes.DECIMAL(8, 2),
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tb_order",
    }
  );
  return tb_order;
};
