exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();
  
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
      users.string('email', 255).notNullable();
      users.boolean('21_or_over').defaultTo(false);
      users.string('reason_for_use');
      users.string('medical_condition');
      users.string('desired_effect');

    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };



