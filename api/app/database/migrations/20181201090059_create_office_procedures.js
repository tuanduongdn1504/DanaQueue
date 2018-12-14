exports.up = knex =>
  knex.schema.createTable('procedures', table => {
    table.increments('id').primary();
    table.string('name');
    table.integer('officeId');
    table
      .foreign('officeId')
      .references('offices.id')
      .onDelete('CASCADE');
    table.boolean('isDisabled').defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists('procedures');
