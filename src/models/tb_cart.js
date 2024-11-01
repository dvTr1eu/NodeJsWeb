"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_cart extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_cart.init(
    {
      id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tb_cart",
    }
  );
  return tb_cart;
};
