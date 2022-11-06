'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("transactions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nameMenu: {
        type: Sequelize.STRING(100)
      },
      priceMenu: {
        type: Sequelize.DECIMAL(20),
        defaultValue: 0,
        validate: {
          notEmpty: { msg: "Price must not empty" }
        }
      },
      qty: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          notEmpty: { msg: "Qty must not empty" }
        }
      },
      detail: {
        type: Sequelize.STRING(500)
      },
      date: {
        type: Sequelize.DATEONLY
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE 
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("transactions");
  }
};
