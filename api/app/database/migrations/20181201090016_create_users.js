exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('fullName');
    table.string('email', 191).unique();
    table.string('password');
    table.string('phoneNumber').unique();
    table.integer('roleId');
    table
      .foreign('roleId')
      .references('roles.id')
      .onDelete('CASCADE');
    table.string('tokenNotify');
    table.boolean('isDisabled').defaultTo(false);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTableIfExists('users');
