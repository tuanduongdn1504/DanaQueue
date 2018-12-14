exports.up = knex =>
  knex.schema.createTable('notifications', table => {
    table.increments('id').primary();
    table.string('title');
    table.string('content');
  });

exports.down = knex => knex.schema.dropTableIfExists('notifications');
