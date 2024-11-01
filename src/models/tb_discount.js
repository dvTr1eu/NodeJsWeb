"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_discount extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_discount.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.INTEGER,
      discount_type: DataTypes.STRING,
      discount_value: DataTypes.DECIMAL(8, 2),
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "tb_discount",
    }
  );
  return tb_discount;
};
