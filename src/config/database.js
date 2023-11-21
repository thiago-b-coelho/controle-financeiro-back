const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const config = require('knex')({
  client: 'mysql2',
  connection: {
    host: env.DB_HOST || '127.0.0.1',
    port: 3306,
    user: env.DB_USER || 'user',
    password: env.DB_PASSWORD || 'password',
    database: env.DB_NAME || 'db'
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: '../../migrations'
  }
});

module.exports = config;