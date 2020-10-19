// update,delete functions for responses



function update (changes, id){
    return db('responses').where({id}).update(changes);
}
function remove(id){
    return db('responses').where({id}).del();
}


module.exports = {
    save,
    update,
    remove
}