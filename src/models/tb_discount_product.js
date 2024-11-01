"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_discount_product extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_discount_product.init(
    {
      id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      discount_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tb_discount_product",
    }
  );
  return tb_discount_product;
};
