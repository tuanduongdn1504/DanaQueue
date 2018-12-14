exports.up = knex =>
  knex.schema.createTable('bookings', table => {
    table.increments('id').primary();
    table.integer('userId');
    table
      .foreign('userId')
      .references('users.id')
      .onDelete('CASCADE');
    table.integer('procedureId');
    table
      .foreign('procedureId')
      .references('procedures.id')
      .onDelete('CASCADE');
    table.integer('officeId');
    table
      .foreign('officeId')
      .references('offices.id')
      .onDelete('CASCADE');
    table.integer('numerical');
    table.timestamp('time');
    table.integer('type');
    table.string('status').defaultTo('pending');
  });

exports.down = knex => knex.schema.dropTableIfExists('bookings');
