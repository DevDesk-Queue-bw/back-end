const express = require('express');

const Tickets = require('./tickets-model.js');
const restricted = require('../auth/restricted-middleware.js');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    Tickets.find()
        .then(tickets => {
            res.status(200).json(tickets)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

module.exports = router;