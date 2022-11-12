const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

const Merchant = sequelize.define("Merchant", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    name: {
        type: Sequelize.STRING(500),
        validate: {
            notEmpty: { msg: "name must not be empty" }
        }
    },
    password: {
        type: Sequelize.STRING(1024),
        validate: {
            notEmpty: { msg: "password must not be empty" }
        }
    },
    merchantName: {
        type: Sequelize.STRING(500),
        validate: {
            notEmpty: { msg: "name must not be empty" }
        }        
    },
    foodCourtName: {
        type: Sequelize.STRING(500),
        validate: {
            notEmpty: { msg: "name must not be empty" }
        }
    },
    email: {
        type: Sequelize.STRING(100),
        unique: true,
        validate: {
            isEmail: { msg: 'Must be a valid email address' }
        }
    },
    phoneNumber: {
        type: Sequelize.STRING(50)
    },
    location: {
        type: Sequelize.STRING(1000)
    },
    photo: {
        type: Sequelize.STRING(1024),
        defaultValue: "default-photo.png"
    },
    pinNumber: {
        type: Sequelize.STRING(1024),
        defaultValue: "000000",
        validate: {
            notEmpty: { msg: 'pin number must not be empty' },
        }
    },
    income: {
        type: Sequelize.DECIMAL(20),
        defaultValue: 0
    }
});

// Define association
Merchant.associate = function (models) {
    Merchant.hasMany(models.Withdraw, { foreignKey: "MerchantID" });
    Merchant.hasMany(models.TopUpCashier, { foreignKey: "MerchantID" });
}

module.exports = Merchant;