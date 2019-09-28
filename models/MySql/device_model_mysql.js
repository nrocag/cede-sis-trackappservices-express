const Sequelize = require("sequelize");
const conndb = require("../../database/connectionMySql");

module.exports = 
    conndb.define(
        'devices',
        {
            id: { type: Sequelize.INTEGER, primaryKey: true },
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            serie: Sequelize.STRING,
            category: Sequelize.INTEGER,
            stateDevice: Sequelize.BOOLEAN
        },
        {
            timestamps: false
        }
    );

