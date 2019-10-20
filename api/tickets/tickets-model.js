const db = require('../../database/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('tickets').where({ assigned: false, resolved: false });
}

function findBy(filter) {
    return db('tickets').where(filter);
}

async function add(ticket) {
    const [id] = await db('tickets').insert(ticket);
  
    return findById(id);
}

function findById(id) {
    return db('tickets')
      .select('id', 'title', 'description')
      .where({ id })
      .first();
}