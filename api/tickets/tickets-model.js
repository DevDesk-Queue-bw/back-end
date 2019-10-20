const db = require('../../database/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update
}

function find() {
    return db('tickets');
}

function findBy(filter) {
    return db('tickets').where(filter);
}

async function add(ticket) {
    const [id] = await db('tickets').insert(ticket);
  
    return findById(id);
}

async function update(id, changes) {
    return await db('tickets')
        .where({ id })
        .update(changes)
        .then(() => findById(id));
}

function findById(id) {
    return db('tickets')
      .select('id', 'title', 'description')
      .where({ id })
      .first();
}