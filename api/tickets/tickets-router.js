const router = require('express').Router();

const Tickets = require('./tickets-model.js');

/**
 *
 * @api {get} /tickets List all tickets
 * @apiName GetTickets
 * @apiGroup Tickets
 * @apiVersion 1.0.0
 *
 * @apiSuccess (200) {Object} tickets Ticket list
 * @apiSuccess (200) {Number} tickets.id Ticket ID
 * @apiSuccess (200) {String} tickets.title Ticket title
 * @apiSuccess (200) {String} tickets.description Ticket description
 * @apiSuccess (200) {String} tickets.tried Ticket tried
 * @apiSuccess (200) {String} tickets.category Ticket category
 * @apiSuccess (200) {String} tickets.solution Ticket solution
 * @apiSuccess (200) {Boolean} tickets.assigned Is ticket assigned? Defaults to false
 * @apiSuccess (200) {Boolean} tickets.resolved Is ticket resolved? Defaults to
 *
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": 1,
 *      "title": "How do I into Node?",
 *      "description": "No seriously I don't get it.",
 *      "tried": "Many things."
 *      "solution": null,
 *      "assigned": false,
 *      "resolved": false
 *    },
 *    {
 *      . . .
 *    }
 *  ]
 *
 * @apiErrorExample {json} List error
 *  HTTP/1.1 500 Internal Server Error
 *
 */

router.get('/', (req, res) => {
    Tickets.find()
        .then(tickets => {
            res.status(200).json(tickets)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

router.get('/open', (req, res) => {
    Tickets.findBy({ assigned: false })
        .then(tickets => {
            res.status(200).json(tickets)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

router.get('/closed', (req, res) => {
    Tickets.findBy({ resolved: true })
        .then(tickets => {
            res.status(200).json(tickets)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

router.post('/', (req, res) => {
    const { title, description, tried, category } = req.body;

    if (req.user.role === 'student') {
        if (!title || !description || !tried || !category) {
            res.status(400).json({ message: "Missing ticket parameters." });
        } else Tickets.add(req.body)
            .then(ticket => {
                Tickets.addTicketToStudent(req.user.id, ticket.id)
                    .then(ticket => {
                        res.status(201).json(ticket);
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Error adding the ticket." })
            })
    } else res.status(400).json({ message: "Adding tickets restricted to students." })
});

module.exports = router;