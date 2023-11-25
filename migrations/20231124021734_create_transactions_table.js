exports.up = function (knex) {
  return knex.schema.createTable('transactions', function (table) {
    table.bigIncrements('id');
    table.string('description');
    table.integer('value');
    table.string('type');
    table.date('date');
    table.bigInteger('category_id').unsigned().references('id').inTable('categories');
    table.bigInteger('user_id').unsigned().references('id').inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('transactions');
};
