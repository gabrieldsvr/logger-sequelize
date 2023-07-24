const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');
const LogTypeEnum = require("../enums/LogTypeEnum");

const LogsModel = sequelize.define('logs', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    event: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    logType: {
        type: DataTypes.ENUM(...Object.values(LogTypeEnum)),
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});

module.exports = LogsModel;

