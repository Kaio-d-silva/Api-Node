const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  /*eslint-disable-next-line no-undef */
  storage: path.join(__dirname, 'database.sqlite')
});

module.exports = sequelize;