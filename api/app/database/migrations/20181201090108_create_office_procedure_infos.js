exports.up = knex =>
  knex.schema.createTable('procedureInfos', table => {
    table.increments('id').primary();
    table.integer('procedureId');
    table
      .foreign('procedureId')
      .references('procedures.id')
      .onDelete('CASCADE');
    table.text('making');
    table.text('sequence');
    table.text('records');
  });

exports.down = knex => knex.schema.dropTableIfExists('procedureInfos');
