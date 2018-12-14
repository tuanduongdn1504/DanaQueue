exports.up = knex =>
  knex.schema.createTable('roles', table => {
    table.increments('id').primary();
    table
      .string('name')
      .notNullable()
      .unique();
    table.string('description');
    table.boolean('isDisabled').defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists('roles');
