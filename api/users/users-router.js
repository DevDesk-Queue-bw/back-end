const router = require('express').Router();

const Tickets = require('../tickets/tickets-model.js');
const Users = require('./users-model.js');

router.post('/tickets/:id/assign', (req, res) => {
    const helper_id = req.user.id;
    const { id } = req.params;

    req.user.role === 'helper' ?
    Users.findAssignedTicketById(id)
        .then(ticket => {
            if (!ticket.length) {
                Users.assignTicket(helper_id, id)
                    .then(tickets => {
                        // Sets ticket assignment to true after assigning to helper
                        Tickets.update(id, { assigned: true })
                        res.status(200).json(tickets);
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({ message: "Failed to assign ticket." })
                    })
            } else res.status(400).json({ message: "Ticket has already been assigned." })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error assigning the ticket." })
        })
    : res.status(400).json({ message: "Ticket assignment restricted to helpers only." });
});

router.get('/tickets', (req, res) => {
    const user_id = req.user.id;

    if (req.user.role === 'student') {
        Users.findStudentTickets(user_id)
            .then(tickets => {
                res.status(200).json(tickets)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Error retrieving tickets" })
            })
    } else if (req.user.role === 'helper') {
        Users.findAssignedTickets(user_id)
            .then(tickets => {
                res.status(200).json(tickets)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Error retrieving tickets" })
            })
    } else res.status(400).json({ message: "User role not specified" });
})

router.put('/tickets/:id/resolved', (req, res) => {
    const { id } = req.params;
    const { solution } = req.body;

    if (solution) {
        req.user.role === 'helper' ?
    
        Users.findAssignedTicketById(id)
            .then(ticket => {
                if (ticket.length) {
                    if (ticket.helper_id === req.user.id) {
                        // Sets ticket to resolved along with the included ticket solution
                        Tickets.update(id, { solution, resolved: true })
                            .then(updatedTicket => {
                                res.status(200).json(updatedTicket)
                            });
                    } else res.status(400).json({ message: "Cannot mark ticket as resolved if it is not assigned to you." })
                } else res.status(404).json({ message: "Ticket not found." });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Error updating the ticket." })
            })
        : res.status(400).json({ message: "Ticket updating restricted to helpers." });
    } else res.status(400).json({ message: "Resolved tickets should include a solution." });
});

router.put('/tickets/:id/reassign', (req, res) => {
    const { id } = req.params;

    req.user.role === 'helper' ?

    Tickets.findById(id)
        .then(ticket => {
            if (ticket) {
                // Sets ticket assignment to false and deletes assigned ticket entry
                Tickets.update(id, { assigned: false })
                    .then(updatedTicket => {
                        Users.removeAssignedTicket(id)
                            .then(() => {
                                res.status(200).json(updatedTicket)
                            });
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
