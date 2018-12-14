exports.up = knex =>
  knex.schema.createTable('officeTypes', table => {
    table.increments('id').primary();
    table
      .string('name')
      .notNullable()
      .unique();
    table.boolean('isDisabled').defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists('officeTypes');
