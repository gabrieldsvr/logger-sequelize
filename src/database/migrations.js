require('dotenv/config');
const sequelize = require('./connection.js');
const MusicsModel = require('../models/MusicsModel.js');
const AudiosModel = require('../models/AudiosModel.js');
const LogsModel = require("../models/LogsModel");
const DocumentsModel = require("../models/DocumentsModel");

const migration = async () => {
    try {
        await MusicsModel.sync();
        await AudiosModel.sync();
        await LogsModel.sync();
        await DocumentsModel.sync();

        await sequelize.sync({ alter: true });
        console.log('Tabelas sincronizadas com sucesso!');
    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    } finally {
        await console.log("Todas migrações executadas com sucesso!");
        await sequelize.close();
    }
};

module.exports = {
    migration
}