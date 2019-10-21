# Devdesk-Queue v1.0.0

API for Devdesk Queue

- [Tickets](#tickets)
	- [List all tickets](#list-all-tickets)
	


# Tickets

## List all tickets



	GET /tickets


### Success Response

Success-Response:

```
HTTP/1.1 200 OK
[
  {
    "id": 1,
    "title": "How do I into Node?",
    "description": "No seriously I don't get it.",
    "tried": "Many things."
    "solution": null,
    "assigned": false,
    "resolved": false
  },
  {
    . . .
  }
]
```
### Error Response

List error

```
HTTP/1.1 500 Internal Server Error
```

