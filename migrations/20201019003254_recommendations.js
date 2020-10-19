
exports.up = function(knex) {
  return knex.schema.createTable('recommendations', tbl => {
      tbl.increments();
      tbl.string('name')
      tbl.string('description')
      tbl.string('tags')
      tbl.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recommendations')
};


