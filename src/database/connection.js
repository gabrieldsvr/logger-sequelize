const Sequelize = require('sequelize');
const config = require('./../config/config.js');

const environment = 'production';
const sequelizeOptions = config[environment];

const sequelize = new Sequelize(sequelizeOptions);

module.exports = sequelize;