"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tb_product", {
      //     name: DataTypes.STRING,
      //   image: DataTypes.STRING,
      //   description: DataTypes.STRING,
      //   price: DataTypes.DECIMAL(8, 2),
      //   avatar: DataTypes.STRING,
      //   sale: DataTypes.INTEGER,
      //   total_pay: DataTypes.BIGINT,
      //   stock_quantity: DataTypes.INTEGER,
      //   category_id: DataTypes.INTEGER,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL(8, 2),
      },
      avatar: {
        type: Sequelize.STRING,
      },
      sale: {
        type: Sequelize.INTEGER,
      },
      total_pay: {
        type: Sequelize.BIGINT,
      },
      stock_quantity: {
        type: Sequelize.INTEGER,
      },
      category_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tb_product");
  },
};
