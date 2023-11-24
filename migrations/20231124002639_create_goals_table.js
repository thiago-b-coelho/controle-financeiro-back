exports.up = function (knex) {
  return knex.schema.createTable('goals', function (table) {
    table.increments('id').primary();
    table.string('description');
    table.integer('value');
    table.date('date');
    table.bigInteger('user_id').unsigned().references('id').inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('goals');
};
