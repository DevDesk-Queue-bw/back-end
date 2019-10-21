exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('student_tickets')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('student_tickets').insert([
        { student_id: 1, ticket_id: 1 },
        { student_id: 1, ticket_id: 2 }
      ]);
    });
};