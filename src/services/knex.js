const knex = require('knex');
const knexConfig = require('../../knexfile')

let conn;

const knexService = () => {
  if (!conn) {
    conn = knexConfig;
    return conn;
  }
  return conn;
};

module.exports = knexService;