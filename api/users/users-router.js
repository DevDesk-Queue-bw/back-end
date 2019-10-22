const router = require('express').Router();

const Tickets = require('../tickets/tickets-model.js');
const Users = require('./users-model.js');

/**
 *
 * @api {post} /users/tickets/:id/assign Assign a ticket
 * @apiName AssignTicket
 * @apiGroup Users
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Ticket ID
 *
 * @apiSuccess (200) {Number} ticket_id Assigned ticket ID
 * @apiSuccess (200) {String} title Assigned ticket title
 * @apiSuccess (200) {String} description Assigned ticket description
 * @apiSuccess (200) {String} tried Assigned ticket tried
 * @apiSuccess (200) {String} category Assigned ticket category
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "ticket_id": 1,
 *    "title": "I need professional help!",
 *    "description": "Help from a professional"
 *    "tried": "Seeking professional help",
 *    "category": "Professional"
 *  }
 * 
 * @apiError TicketAssigned Ticket already assigned.
 *
 * @apiErrorExample {json} Ticket assigned
 *  HTTP/1.1 400
 *  {
 *    "message": "Ticket has already been assigned."
 *  }
 *
 * @apiError AssignmentRestricted Ticket assignment restricted.
 *
 * @apiErrorExample {json} Ticket assignment restricted
 *  HTTP/1.1 400
 *  {
 *    "message": "Ticket assignment restricted to helpers only."
 *  }
 * 
 * @apiErrorExample {json} Assignment error
 *  HTTP/1.1 500 Internal Server Error
 *
 */

router.post('/tickets/:id/assign', (req, res) => {
    const helper_id = req.user.id;
    const { id } = req.params;

    req.user.role === 'helper' ?
    Users.findAssignedTicketById(id)
        .then(ticket => {
            if (!ticket) {
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

/**
 *
 * @api {get} /users/tickets Get user's tickets
 * @apiName GetUserTickets
 * @apiGroup Users
 * @apiVersion 1.0.0
 *
 * @apiSuccess (200) {Number} ticket_id Assigned ticket ID
 * @apiSuccess (200) {String} title Assigned ticket title
 * @apiSuccess (200) {String} description Assigned ticket description
 * @apiSuccess (200) {String} tried Assigned ticket tried
 * @apiSuccess (200) {String} category Assigned ticket category
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "ticket_id": 1,
 *      "title": "I need professional help!",
 *      "description": "Help from a professional"
 *      "tried": "Seeking professional help",
 *      "category": "Professional"
 *    },
 *    {
 *      ...
 *    }
 *  ]
 * 
 * @apiError UnspecifiedRole Role not specified.
 *
 * @apiErrorExample {json} Role not specified
 *  HTTP/1.1 400
 *  {
 *    "message": "User role not specified."
 *  }
 *
 * @apiError AssignmentRestricted Ticket assignment restricted.
 *
 * @apiErrorExample {json} Ticket assignment restricted
 *  HTTP/1.1 400
 *  {
 *    "message": "Ticket assignment restricted to helpers only."
 *  }
 * 
 * @apiErrorExample {json} Retrieval error
 *  HTTP/1.1 500 Internal Server Error
 *
 */

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

/**
 *
 * @api {put} /users/tickets/:id/resolve Resolve a ticket
 * @apiName ResolveTicket
 * @apiGroup Users
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Ticket ID
 *
 * @apiSuccess (200) {Number} ticket_id Assigned ticket ID
 * @apiSuccess (200) {String} title Assigned ticket title
 * @apiSuccess (200) {String} description Assigned ticket description
 * @apiSuccess (200) {String} tried Assigned ticket tried
 * @apiSuccess (200) {String} category Assigned ticket category
 * 
 * @apiParamExample {json} Request-Example:
 *  {
 *    "solution": "This is a solution"
 *  }
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": 1,
 *    "title": "How do I into Node?",
 *    "description": "No seriously I don't get it."
 *  }
 * 
 * @apiError InvalidAssignment Invalid assignment,
 *
 * @apiErrorExample {json} Invalid ticket assignment
 *  HTTP/1.1 400
 *  {
 *    "message": "Cannot mark ticket as resolved if it is not assigned to you."
 *  }
 *
 * @apiError TicketNotFound Ticket not found.
 *
 * @apiErrorExample {json} Ticket not found
 *  HTTP/1.1 404
 *  {
 *    "message": "Ticket not found."
 *  }
 * 
 * @apiError InvalidRole Role not valid.
 *
 * @apiErrorExample {json} Invalid role
 *  HTTP/1.1 400
 *  {
 *    "message": "Ticket updating restricted to helpers."
 *  }
 * 
 * @apiError MissingTicketParameter No solution provided.
 *
 * @apiErrorExample {json} No solution provided
 *  HTTP/1.1 400
 *  {
 *    "message": "Resolved tickets should include a solution."
 *  }
 * 
 * @apiErrorExample {json} Update error
 *  HTTP/1.1 500 Internal Server Error
 *
 */

router.put('/tickets/:id/resolved', (req, res) => {
    const { id } = req.params;
    const user_id = req.user.id;
    const { solution } = req.body;

    if (solution) {
        req.user.role === 'helper' ?
    
        Users.findAssignedTicketById(id)
            .then(ticket => {
                if (ticket) {
                    if (ticket.helper_id === user_id) {
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

/**
 *
 * @api {put} /users/tickets/:id/reassign Reassign a ticket
 * @apiName ReassignTicket
 * @apiGroup Users
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Ticket ID
 *
 * @apiSuccess (200) {Number} ticket_id Reassigned ticket ID
 * @apiSuccess (200) {String} title Reassigned ticket title
 * @apiSuccess (200) {String} description Reassigned ticket description
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": 1,
 *    "title": "How do I into Node?",
 *    "description": "No seriously I don't get it."
 *  }
 * 
 * @apiError InvalidAssignment Invalid assignment,
 *
 * @apiErrorExample {json} Invalid ticket assignment
 *  HTTP/1.1 400
 *  {
 *    "message": "Cannot reassign ticket if it is not assigned to you."
 *  }
 *
 * @apiError TicketNotFound Ticket not found.
 *
 * @apiErrorExample {json} Ticket not found
 *  HTTP/1.1 404
 *  {
 *    "message": "Ticket not found."
 *  }
 * 
 * @apiError InvalidRole Role not valid.
 *
 * @apiErrorExample {json} Invalid role
 *  HTTP/1.1 400
 *  {
 *    "message": "Ticket updating restricted to helpers."
 *  }
 * 
 * @apiErrorExample {json} Update error
 *  HTTP/1.1 500 Internal Server Error
 *
 */

router.put('/tickets/:id/reassign', (req, res) => {
    const { id } = req.params;
    const user_id = req.user.id;

    req.user.role === 'helper' ?

    Users.findAssignedTicketById(id)
        .then(ticket => {
            if (ticket) {
                if (ticket.helper_id === user_id) {
                    // Sets ticket assignment to false and deletes assigned ticket entry
                    Tickets.update(id, { assigned: false })
                        .then(updatedTicket => {
                            Users.removeAssignedTicket(id)
                                .then(() => {
                                    res.status(200).json(updatedTicket)
                                });
                        });
                } else res.status(400).json({ message: "Cannot reassign ticket if it is not assigned to you." })
            } else res.status(404).json({ message: "Ticket not found." });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error updating the ticket." })
        })
    : res.status(400).json({ message: "Ticket updating restricted to helpers." });
});

/**
 *
 * @api {delete} /users/tickets/:id Delete a ticket
 * @apiName DeleteTicket
 * @apiGroup Users
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Ticket ID
 *
 * @apiSuccess (200) {String} message Success message
 * 
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "Ticket deleted successfully."
 *  }
 * 
 * @apiError InvalidUser Invalid user ID,
 *
 * @apiErrorExample {json} Invalid user ID
 *  HTTP/1.1 400
 *  {
 *    "message": "Only the student that submitted the ticket may delete it."
 *  }
 *
 * @apiError TicketNotFound Ticket not found.
 *
 * @apiErrorExample {json} Ticket not found
 *  HTTP/1.1 404
 *  {
 *    "message": "Ticket could not be found."
 *  }
 * 
 * @apiError InvalidRole Role not valid.
 *
 * @apiErrorExample {json} Invalid role
 *  HTTP/1.1 400
 *  {
 *    "message": "Deleting tickets is restricted to students."
 *  }
 * 
 * @apiErrorExample {json} Delete error
 *  HTTP/1.1 500 Internal Server Error
 *
 */

router.delete('/tickets/:id', (req, res) => {
    const { id } = req.params;

    req.user.role === 'student' ?

    Users.findStudentTicketById(id)
        .then(ticket => {
            if (ticket) {
                // Deletes student ticket entry as well as the ticket entry in database
                if (ticket.student_id === req.user.id) {
                    Users.removeStudentTicket(id)
                        .then(() => {
                            Tickets.remove(id);
                            res.status(200).json({ message: "Ticket deleted successfully." })
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({ message: "There was an error deleting the ticket." })
                        })
                } else res.status(400).json({ message: "Only the student that submitted the ticket may delete it." })
            } else res.status(404).json({ message: "Ticket could not be found." })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "There was an error deleting the ticket." });
        })
    : res.status(400).json({ message: "Deleting tickets is restricted to students." })
})

module.exports = router;
