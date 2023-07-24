// services/LogService.js
const LogModel = require('../models/LogsModel');

class LogsService {
    static createLog = async (event, description, logType) => {
        try {
            return await LogModel.create({
                event: event,
                description: description,
                logType: logType,
            });
        } catch (error) {
            console.error('Erro ao criar registro de log:', error);
            throw error;
        }
    };

    static async getLogs() {
        try {
            return await LogModel.findAll();
        } catch (error) {
            console.error('Erro ao obter registros de log:', error);
            throw error;
        }
    }

}

module.exports = LogsService;