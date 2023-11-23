const knex = require('knex');
const knexConfig = require('../config/database')

module.exports = knex(knexConfig);