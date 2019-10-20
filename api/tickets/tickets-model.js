const db = require('../../database/db-config.js');

module.exports = {
    find
}

function find() {
    return db('tickets').where({ assigned: false, resolved: false });
}