
exports.up = function(knex) {
    knex.schema.createTable('users', function (table) {
        table.renameColumn("21_or_over", "age_verified")
      });
};

exports.down = function(knex) {
    knex.schema.createTable('users', function (table) {
        table.renameColumn("age_verified", "21_or_over")
      });
};
