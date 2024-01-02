const initModels = require('./models/init-models')
const sequelize = require('./connection.js');
var models = initModels(sequelize);

module.exports = models;