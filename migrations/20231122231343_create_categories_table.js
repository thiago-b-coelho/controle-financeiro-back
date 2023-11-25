// migrations/20231121123456_create_categories_table.js
exports.up = function (knex) {
  return knex.schema.createTable('categories', function (table) {
    table.bigIncrements('id');
    table.string('name');
    table.bigInteger('user_id').unsigned().references('id').inTable('users');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('categories');
};
