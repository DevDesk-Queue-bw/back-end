# Devdesk-Queue v1.0.0

API for Devdesk Queue

- [Tickets](#tickets)
	- [Add new ticket](#add-new-ticket)
	- [List closed tickets](#list-closed-tickets)
	- [List open tickets](#list-open-tickets)
	- [List all tickets](#list-all-tickets)
	


# Tickets

## Add new ticket



	POST /


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| title			| String			|  <p>Ticket title</p>							|
| description			| String			|  <p>Ticket description</p>							|
| tried			| String			|  <p>Ticket tried</p>							|
| category			| String			|  <p>Ticket category</p>							|

### Success Response

Success-Response:

```
HTTP/1.1 200 OK
{
  "id": 1,
  "title": "I need professional help!",
  "description": "Help from a professional"
}
```
### Error Response

Missing ticket parameters.

```
HTTP/1.1 400
{
  "message": "Missing ticket parameters."
}
```
Error adding the ticket

```
HTTP/1.1 500
{
  "message": "Error adding the ticket."
}
```
Adding tickets restricted

```
HTTP/1.1 400
{
  "message": "Adding tickets restricted to students."
}
```
## List closed tickets



	GET /tickets/closed


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
    "assigned": true,
    "resolved": true
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
## List open tickets



	GET /tickets/open


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
    "category": "Node",
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
    "category": "Node",
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

