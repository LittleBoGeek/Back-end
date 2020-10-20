const knex = require('knex');

const knexConfig = require('../knexfile.js');
const dbEnv = process.env.DB_ENV 
//console.log("env", process.env)
module.exports = knex(knexConfig[dbEnv]);