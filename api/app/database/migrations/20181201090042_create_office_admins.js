exports.up = knex =>
  knex.schema.createTable('officeAdmins', table => {
    table.increments('id').primary();
    table.integer('userId');
    table
      .foreign('userId')
      .references('users.id')
      .onDelete('CASCADE');
    table.integer('officeId');
    table
      .foreign('officeId')
      .references('offices.id')
      .onDelete('CASCADE');
  });

exports.down = knex => knex.schema.dropTableIfExists('officeAdmins');
