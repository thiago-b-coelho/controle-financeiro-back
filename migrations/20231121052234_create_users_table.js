// migrations/20231121123456_create_users_table.js
exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.bigIncrements('id');
    table.string('name');
    table.string('username');
    table.string('email');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
