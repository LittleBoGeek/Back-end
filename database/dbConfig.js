const knex = require('knex');

const knexConfig = require('../knexfile.js');
const dbEnv = process.env.DB_ENV 
console.log("dbEnv", dbEnv)
module.exports = knex(knexConfig[dbEnv]);