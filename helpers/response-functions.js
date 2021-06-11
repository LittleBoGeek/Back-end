const db = require("../database/dbConfig");

function find() {
  return db("recommendations");
}

function findById(id) {
  console.log("id", id);
  return db("recommendations").where({ id: id }).first();
}

function add(recommendation) {
  return db("recommendations").insert(recommendation);
}

function update(changes, id) {
  return db("recommendations").where({ id }).update(changes);
}
function remove(id) {
  return db("recommendations").where({ id }).del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
