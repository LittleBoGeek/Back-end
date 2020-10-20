const knex = require('knex');

const knexConfig = require('../knexfile.js');
const dbEnv = process.env.DB_ENV 
console.log("dbEnv", dbEnv)
console.log("knexConfig", knexConfig)
console.log(process.env.DATABASE_URL, 'process.env.DATABASE_URL')
console.log(knexConfig['production'])
module.exports = knex(knexConfig[dbEnv]);