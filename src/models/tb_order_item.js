"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_order_item extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_order_item.init(
    {
      id: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(8, 2),
      total_price: DataTypes.DECIMAL(8, 2),
    },
    {
      sequelize,
      modelName: "tb_order_item",
    }
  );
  return tb_order_item;
};
