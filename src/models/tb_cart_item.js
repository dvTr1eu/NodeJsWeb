"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_cart_item extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_cart_item.init(
    {
      id: DataTypes.INTEGER,
      cart_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tb_cart_item",
    }
  );
  return tb_cart_item;
};
