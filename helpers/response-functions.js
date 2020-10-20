const db = require('../database/dbConfig');

// update,delete functions for responses

 // all recommendations [x]
function find() {
    return db('recommendations')
}

// recommendations based on id
function findById(id){
    console.log("id", id)
    return db('recommendations').where({id:id}).first()
}

function add(recommendation) {
    return db('recommendations').insert(recommendation)
}

function update (changes, id){
    return db('recommendations').where({id}).update(changes);
}
function remove(id){
    return db('recommendations').where({id}).del();
}


module.exports = {
    find,
    findById,
    add,
    update,
    remove
}