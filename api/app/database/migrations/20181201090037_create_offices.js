exports.up = knex =>
  knex.schema.createTable('offices', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('address');
    table.integer('employeesCount').defaultTo(1);
    table.integer('officeTypeId');
    table
      .foreign('officeTypeId')
      .references('officeTypes.id')
      .onDelete('CASCADE');
    table.boolean('isDisabled').defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists('offices');
