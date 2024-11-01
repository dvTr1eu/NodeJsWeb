"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_user extends Model {
    static associate(models) {
      // define association here
    }
  }
  tb_user.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      email: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      avatar: DataTypes.STRING,
      user_name: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_user",
    }
  );
  return tb_user;
};
