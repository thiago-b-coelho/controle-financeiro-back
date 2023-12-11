const knex = require('knex');
const knexConfig = require('../config/database')['production'];

module.exports = knex(knexConfig);