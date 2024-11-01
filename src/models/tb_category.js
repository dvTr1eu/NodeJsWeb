"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_category extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_category.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_category",
    }
  );
  return tb_category;
};
