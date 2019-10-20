exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tickets')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tickets').insert([
        {
          title: "How do I into Node?",
          description: "No seriously I don't get it.",
          tried: "Many things.",
          category: "Node"
        },
        {
          title: "How do I into React?",
          description: "I really don't get it.",
          tried: "Nothing.",
          category: "React"
        }
      ]);
    });
};