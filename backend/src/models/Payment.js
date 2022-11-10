const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

const Payment = sequelize.define("Payment", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    CardID: {
        type: Sequelize.INTEGER,
        references: {
            model: 'cards',
            key: 'id'
        }
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

// Define association
Payment.associate = function (models) {
    Payment.belongsTo(models.Card, { foreignKey: 'CardID' });
}

module.exports = Payment;