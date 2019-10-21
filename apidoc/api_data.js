define({ "api": [
  {
    "type": "post",
    "url": "/",
    "title": "Add new ticket",
    "name": "AddNewTicket",
    "group": "Tickets",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Ticket title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Ticket description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tried",
            "description": "<p>Ticket tried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Ticket category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"title\": \"I need professional help!\",\n  \"description\": \"Help from a professional\",\n  \"tried\": \"Seeking professional help\",\n  \"category\": \"Professional\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Created ticket ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Created ticket title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Created ticket description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"title\": \"I need professional help!\",\n  \"description\": \"Help from a professional\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingTicketParameters",
            "description": "<p>Missing ticket parameters.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorAddingTicket",
            "description": "<p>Error adding the ticket.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AddingTicketRestricted",
            "description": "<p>Adding tickets restricted to students.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missing ticket parameters.",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Missing ticket parameters.\"\n}",
          "type": "json"
        },
        {
          "title": "Error adding the ticket",
          "content": "HTTP/1.1 500\n{\n  \"message\": \"Error adding the ticket.\"\n}",
          "type": "json"
        },
        {
          "title": "Adding tickets restricted",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Adding tickets restricted to students.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/tickets/tickets-router.js",
    "groupTitle": "Tickets",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com//"
      }
    ]
  },
  {
    "type": "get",
    "url": "/tickets/closed",
    "title": "List closed tickets",
    "name": "GetClosedTickets",
    "group": "Tickets",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "tickets",
            "description": "<p>Ticket list</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "tickets.id",
            "description": "<p>Ticket ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.title",
            "description": "<p>Ticket title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.description",
            "description": "<p>Ticket description</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.tried",
            "description": "<p>Ticket tried</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.category",
            "description": "<p>Ticket category</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.solution",
            "description": "<p>Ticket solution</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.assigned",
            "description": "<p>Is ticket assigned? Defaults to false</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.resolved",
            "description": "<p>Is ticket resolved? Returns ticket only if true</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"title\": \"How do I into Node?\",\n    \"description\": \"No seriously I don't get it.\",\n    \"tried\": \"Many things.\"\n    \"solution\": null,\n    \"assigned\": true,\n    \"resolved\": true\n  },\n  {\n    . . .\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/tickets/tickets-router.js",
    "groupTitle": "Tickets",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com//tickets/closed"
      }
    ]
  },
  {
    "type": "get",
    "url": "/tickets/open",
    "title": "List open tickets",
    "name": "GetOpenTickets",
    "group": "Tickets",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "tickets",
            "description": "<p>Ticket list</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "tickets.id",
            "description": "<p>Ticket ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.title",
            "description": "<p>Ticket title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.description",
            "description": "<p>Ticket description</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.tried",
            "description": "<p>Ticket tried</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.category",
            "description": "<p>Ticket category</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.solution",
            "description": "<p>Ticket solution</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.assigned",
            "description": "<p>Is ticket assigned? Returns ticket only if false</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.resolved",
            "description": "<p>Is ticket resolved? Defaults to false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"title\": \"How do I into Node?\",\n    \"description\": \"No seriously I don't get it.\",\n    \"tried\": \"Many things.\"\n    \"category\": \"Node\",\n    \"solution\": null,\n    \"assigned\": false,\n    \"resolved\": false\n  },\n  {\n    . . .\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/tickets/tickets-router.js",
    "groupTitle": "Tickets",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com//tickets/open"
      }
    ]
  },
  {
    "type": "get",
    "url": "/tickets",
    "title": "List all tickets",
    "name": "GetTickets",
    "group": "Tickets",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "tickets",
            "description": "<p>Ticket list</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "tickets.id",
            "description": "<p>Ticket ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.title",
            "description": "<p>Ticket title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.description",
            "description": "<p>Ticket description</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.tried",
            "description": "<p>Ticket tried</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.category",
            "description": "<p>Ticket category</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tickets.solution",
            "description": "<p>Ticket solution</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.assigned",
            "description": "<p>Is ticket assigned? Defaults to false</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "tickets.resolved",
            "description": "<p>Is ticket resolved? Defaults to false</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"title\": \"How do I into Node?\",\n    \"description\": \"No seriously I don't get it.\",\n    \"tried\": \"Many things.\"\n    \"category\": \"Node\",\n    \"solution\": null,\n    \"assigned\": false,\n    \"resolved\": false\n  },\n  {\n    . . .\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/tickets/tickets-router.js",
    "groupTitle": "Tickets",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com//tickets"
      }
    ]
  }
] });
