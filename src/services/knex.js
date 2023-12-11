const knex = require('knex');
const knexConfig = require('../config/database')['development'];

module.exports = knex(knexConfig);