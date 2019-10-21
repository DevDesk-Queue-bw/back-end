define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login user",
    "name": "LoginUser",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n  \"username\": \"lambdastudent\",\n  \"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Welcome message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User's Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"message\": \"Welcome lambdastudent!\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImplZmYiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTU3MTY5MjU2OCwiZXhwIjoxNTcxNzAzMzY4fQ.szvk7Z1GqU9vPD8Jaj_4fkIXgpWVfmF9GipThZhGKjQ\"\n}",
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
            "field": "InvalidCredentials",
            "description": "<p>Invalid user credentials</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingParameters",
            "description": "<p>Missing required parameters</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid credentials",
          "content": "HTTP/1.1 401\n{\n  \"message\": \"Invalid user credentials\"\n}",
          "type": "json"
        },
        {
          "title": "Login error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/auth/auth-router.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register new user",
    "name": "RegisterUser",
    "group": "Auth",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n  \"username\": \"lambdastudent\",\n  \"password\": \"password\",\n  \"role\": \"student\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User's role</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 Created\n{\n  \"id\": 1,\n  \"username\": \"lambdastudent\",\n  \"role\": \"student\"\n}",
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
            "field": "MissingParameters",
            "description": "<p>Missing required parameters</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Missing required parameters",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Missing user parameters\"\n}",
          "type": "json"
        },
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/auth/auth-router.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com/auth/register"
      }
    ]
  },
  {
    "type": "post",
    "url": "/tickets",
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
        "url": "https://devdesk-queue-bw.herokuapp.com/tickets"
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
        "url": "https://devdesk-queue-bw.herokuapp.com/tickets/closed"
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
        "url": "https://devdesk-queue-bw.herokuapp.com/tickets/open"
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
        "url": "https://devdesk-queue-bw.herokuapp.com/tickets"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users/tickets/:id/assign",
    "title": "Assign a ticket",
    "name": "AssignTicket",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Ticket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ticket_id",
            "description": "<p>Assigned ticket ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Assigned ticket title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Assigned ticket description</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tried",
            "description": "<p>Assigned ticket tried</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Assigned ticket category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ticket_id\": 1,\n  \"title\": \"I need professional help!\",\n  \"description\": \"Help from a professional\"\n  \"tried\": \"Seeking professional help\",\n  \"category\": \"Professional\"\n}",
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
            "field": "TicketAssigned",
            "description": "<p>Ticket already assigned.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AssignmentRestricted",
            "description": "<p>Ticket assignment restricted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ticket assigned",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Ticket has already been assigned.\"\n}",
          "type": "json"
        },
        {
          "title": "Ticket assignment restricted",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Ticket assignment restricted to helpers only.\"\n}",
          "type": "json"
        },
        {
          "title": "Assignment error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/users/users-router.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com/users/tickets/:id/assign"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/users/tickets/:id",
    "title": "Delete a ticket",
    "name": "DeleteTicket",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Ticket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Ticket deleted successfully.\"\n}",
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
            "field": "InvalidUser",
            "description": "<p>Invalid user ID,</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TicketNotFound",
            "description": "<p>Ticket not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRole",
            "description": "<p>Role not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid user ID",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Only the student that submitted the ticket may delete it.\"\n}",
          "type": "json"
        },
        {
          "title": "Ticket not found",
          "content": "HTTP/1.1 404\n{\n  \"message\": \"Ticket could not be found.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalid role",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Deleting tickets is restricted to students.\"\n}",
          "type": "json"
        },
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/users/users-router.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com/users/tickets/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/tickets",
    "title": "Get user's tickets",
    "name": "GetUserTickets",
    "group": "Users",
    "version": "1.0.0",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ticket_id",
            "description": "<p>Assigned ticket ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Assigned ticket title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Assigned ticket description</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tried",
            "description": "<p>Assigned ticket tried</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Assigned ticket category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"ticket_id\": 1,\n    \"title\": \"I need professional help!\",\n    \"description\": \"Help from a professional\"\n    \"tried\": \"Seeking professional help\",\n    \"category\": \"Professional\"\n  },\n  {\n    ...\n  }\n]",
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
            "field": "UnspecifiedRole",
            "description": "<p>Role not specified.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AssignmentRestricted",
            "description": "<p>Ticket assignment restricted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Role not specified",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"User role not specified.\"\n}",
          "type": "json"
        },
        {
          "title": "Ticket assignment restricted",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Ticket assignment restricted to helpers only.\"\n}",
          "type": "json"
        },
        {
          "title": "Retrieval error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/users/users-router.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com/users/tickets"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/tickets/:id/reassign",
    "title": "Reassign a ticket",
    "name": "ReassignTicket",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Ticket ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "ticket_id",
            "description": "<p>Reassigned ticket ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Reassigned ticket title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Reassigned ticket description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"title\": \"How do I into Node?\",\n  \"description\": \"No seriously I don't get it.\"\n}",
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
            "field": "InvalidAssignment",
            "description": "<p>Invalid assignment,</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TicketNotFound",
            "description": "<p>Ticket not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRole",
            "description": "<p>Role not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid ticket assignment",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Cannot reassign ticket if it is not assigned to you.\"\n}",
          "type": "json"
        },
        {
          "title": "Ticket not found",
          "content": "HTTP/1.1 404\n{\n  \"message\": \"Ticket not found.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalid role",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Ticket updating restricted to helpers.\"\n}",
          "type": "json"
        },
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/users/users-router.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com/users/tickets/:id/reassign"
      }
    ]
  },
  {
    "type": "put",
    "url": "/users/tickets/:id/resolve",
    "title": "Resolve a ticket",
    "name": "ResolveTicket",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Ticket ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"solution\": \"This is a solution\"\n}",
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
            "field": "ticket_id",
            "description": "<p>Assigned ticket ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Assigned ticket title</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Assigned ticket description</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "tried",
            "description": "<p>Assigned ticket tried</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Assigned ticket category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"title\": \"How do I into Node?\",\n  \"description\": \"No seriously I don't get it.\"\n}",
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
            "field": "InvalidAssignment",
            "description": "<p>Invalid assignment,</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TicketNotFound",
            "description": "<p>Ticket not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRole",
            "description": "<p>Role not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingTicketParameter",
            "description": "<p>No solution provided.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Invalid ticket assignment",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Cannot mark ticket as resolved if it is not assigned to you.\"\n}",
          "type": "json"
        },
        {
          "title": "Ticket not found",
          "content": "HTTP/1.1 404\n{\n  \"message\": \"Ticket not found.\"\n}",
          "type": "json"
        },
        {
          "title": "Invalid role",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Ticket updating restricted to helpers.\"\n}",
          "type": "json"
        },
        {
          "title": "No solution provided",
          "content": "HTTP/1.1 400\n{\n  \"message\": \"Resolved tickets should include a solution.\"\n}",
          "type": "json"
        },
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "api/users/users-router.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://devdesk-queue-bw.herokuapp.com/users/tickets/:id/resolve"
      }
    ]
  }
] });
