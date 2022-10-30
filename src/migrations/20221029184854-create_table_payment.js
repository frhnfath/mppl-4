'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("payments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      CardID: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.DECIMAL(20),
        defaultValue: 0
      },
      foodcourtName: {
        type: Sequelize.STRING(100)
      },
      merchantName: {
        type: Sequelize.STRING(100)
      },
      date: {
        type: Sequelize.DATEONLY
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("payments");
  }
};
