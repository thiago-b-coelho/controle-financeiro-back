const knex = require('knex');
const knexConfig = require('../config/database.js')

let conn;

const knexService = () => {
  if (!conn) {
    conn = knex(knexConfig);
    return conn;
  }
  return conn;
};

module.exports = knexService;