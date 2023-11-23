const dotenv = require('dotenv');
const env = dotenv.config().parsed;

// const config = {
//   client: 'mysql2',
//   connection: {
//     host: env.DB_HOST || '127.0.0.1',
//     port: 3306,
//     user: env.DB_USER || 'user',
//     password: env.DB_PASSWORD || 'password',
//     database: env.DB_NAME || 'db'
//   }
// };

module.exports = {
  client: 'mysql2',
  connection: {
    host: env.DB_HOST || '127.0.0.1',
    port: 3306,
    user: env.DB_USER || 'user',
    password: env.DB_PASSWORD || 'password',
    database: env.DB_NAME || 'db'
  }
};
// require('knex')(config);