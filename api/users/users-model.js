const db = require('../../database/db-config.js');

module.exports = {
  add,
  assignTicket,
  find,
  findAssignedTicketById,
  findAssignedTickets,
  findBy,
  findById
};

async function assignTicket(helper_id, ticket_id) {
  return await db('assigned_tickets')
      .insert({ helper_id, ticket_id }, 'id')
      .then(() => findAssignedTickets(helper_id));
}

function find() {
  return db('users').select('id', 'username', 'role');
}

async function findAssignedTicketById(ticket_id) {
  return await db('assigned_tickets').where({ ticket_id });
}

async function findAssignedTickets(id) {
  return await db('assigned_tickets as at')
    .where('helper_id', id)
    .join('tickets as t', 'at.ticket_id', 't.id')
    .select(
      'at.ticket_id',
      't.title',
      't.description',
      't.tried',
      't.category'
    );
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .select('id', 'username', 'role')
    .where({ id })
    .first();
}