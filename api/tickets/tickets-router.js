const express = require('express');

const Tickets = require('./tickets-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Tickets.find()
        .then(tickets => {
            tickets.map(ticket => {
                ticket.assigned === 0 ? ticket.assigned = false : ticket.assigned = true;
                ticket.resolved === 0 ? ticket.resolved = false : ticket.resolved = true;
            });
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
            res.status(201).json(ticket);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error adding the ticket." })
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    req.user.role === 'helper' ?

    Tickets.findById(id)
        .then(ticket => {
            if (ticket) {
                Tickets.update(id, changes)
                    .then(updatedTicket => {
                        res.status(200).json(updatedTicket)
                    });
            } else res.status(404).json({ message: "Ticket not found." });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error updating the ticket." })
        })
    : res.status(400).json({ message: "Ticket updating restricted to helpers." });
});

module.exports = router;