const db = require('../../database/db-config.js');

module.exports = {
    add,
    addTicketToStudent,
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

async function addTicketToStudent(student_id, ticket_id) {
    return await db('student_tickets')
        .insert({ student_id, ticket_id}, 'id')
        .then(() => findById(ticket_id));
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