define({ "api": [
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
            "description": "<p>Is ticket resolved? Defaults to</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"title\": \"How do I into Node?\",\n    \"description\": \"No seriously I don't get it.\",\n    \"tried\": \"Many things.\"\n    \"solution\": null,\n    \"assigned\": false,\n    \"resolved\": false\n  },\n  {\n    . . .\n  }\n]",
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
