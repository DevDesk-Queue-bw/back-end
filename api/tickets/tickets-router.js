const express = require('express');

const Tickets = require('./tickets-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Tickets.find()
        .then(tickets => {
            res.status(200).json(tickets)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

router.post('/', (req, res) => {
    const { title, description, tried, category } = req.body;
    if (!title || !description || !tried || !category) {
        res.status(400).json({ message: "Missing ticket parameters." });
    } else Tickets.add(req.body)
        .then(ticket => {
            res.status(200).json(ticket);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error adding the ticket." })
        })
})

module.exports = router;