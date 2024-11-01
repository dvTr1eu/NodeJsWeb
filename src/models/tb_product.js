"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_product extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_product.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DECIMAL(8, 2),
      avatar: DataTypes.STRING,
      sale: DataTypes.INTEGER,
      total_pay: DataTypes.BIGINT,
      stock_quantity: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tb_product",
    }
  );
  return tb_product;
};
