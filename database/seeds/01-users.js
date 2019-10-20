const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'lambdastudent',
          password: bcrypt.hashSync('password', 10),
          role: 'student'
        },
        {
          username: 'lambdahelper',
          password: bcrypt.hashSync('password', 10),
          role: 'helper'
        }
      ]);
    });
};
