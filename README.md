# Devdesk-Queue v1.0.0

API for Devdesk Queue

- [Auth](#auth)
	- [Login user](#login-user)
	- [Register new user](#register-new-user)
	
- [Tickets](#tickets)
	- [Add new ticket](#add-new-ticket)
	- [List closed tickets](#list-closed-tickets)
	- [List open tickets](#list-open-tickets)
	- [List all tickets](#list-all-tickets)
	
- [Users](#users)
	- [Assign a ticket](#assign-a-ticket)
	- [Delete a ticket](#delete-a-ticket)
	- [Get user&#39;s tickets](#get-user&#39;s-tickets)
	- [Reassign a ticket](#reassign-a-ticket)
	- [Resolve a ticket](#resolve-a-ticket)
	


# Auth

## Login user



	POST /auth/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>User username</p>							|
| password			| String			|  <p>User password</p>							|

### Success Response

Success-Response:

```
 HTTP/1.1 200 OK
{
  "message": "Welcome lambdastudent!",
  "id": 1,
  "username": "lambdastudent",
  "role": "student",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImplZmYiLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTU3MTY5MjU2OCwiZXhwIjoxNTcxNzAzMzY4fQ.szvk7Z1GqU9vPD8Jaj_4fkIXgpWVfmF9GipThZhGKjQ"
}
```
### Error Response

Invalid credentials

```
HTTP/1.1 401
{
  "message": "Invalid user credentials"
}
```
Login error

```
HTTP/1.1 500 Internal Server Error
```
## Register new user



	POST /auth/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>User username</p>							|
| password			| String			|  <p>User password</p>							|
| role			| String			|  <p>User role</p>							|

### Success Response

Success-Response:

```
 HTTP/1.1 201 Created
{
  "id": 1,
  "username": "lambdastudent",
  "role": "student"
}
```
### Error Response

Missing required parameters

```
HTTP/1.1 400
{
  "message": "Missing user parameters"
}
```
Invalid parameter sent

```
HTTP/1.1 400
{
  "message": "Invalid role being sent"
}
```
Register error

```
HTTP/1.1 500 Internal Server Error
```
# Tickets

## Add new ticket



	POST /tickets


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
# Users

## Assign a ticket



	POST /users/tickets/:id/assign


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>Ticket ID</p>							|

### Success Response

Success-Response:

```
HTTP/1.1 200 OK
{
  "ticket_id": 1,
  "title": "I need professional help!",
  "description": "Help from a professional"
  "tried": "Seeking professional help",
  "category": "Professional"
}
```
### Error Response

Ticket assigned

```
HTTP/1.1 400
{
  "message": "Ticket has already been assigned."
}
```
Ticket assignment restricted

```
HTTP/1.1 400
{
  "message": "Ticket assignment restricted to helpers only."
}
```
Assignment error

```
HTTP/1.1 500 Internal Server Error
```
## Delete a ticket



	DELETE /users/tickets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>Ticket ID</p>							|

### Success Response

Success-Response:

```
HTTP/1.1 200 OK
{
  "message": "Ticket deleted successfully."
}
```
### Error Response

Invalid user ID

```
HTTP/1.1 400
{
  "message": "Only the student that submitted the ticket may delete it."
}
```
Ticket not found

```
HTTP/1.1 404
{
  "message": "Ticket could not be found."
}
```
Invalid role

```
HTTP/1.1 400
{
  "message": "Deleting tickets is restricted to students."
}
```
Delete error

```
HTTP/1.1 500 Internal Server Error
```
## Get user&#39;s tickets



	GET /users/tickets


### Success Response

Success-Response:

```
HTTP/1.1 200 OK
[
  {
    "ticket_id": 1,
    "title": "I need professional help!",
    "description": "Help from a professional"
    "tried": "Seeking professional help",
    "category": "Professional"
  },
  {
    ...
  }
]
```
### Error Response

Role not specified

```
HTTP/1.1 400
{
  "message": "User role not specified."
}
```
Ticket assignment restricted

```
HTTP/1.1 400
{
  "message": "Ticket assignment restricted to helpers only."
}
```
Retrieval error

```
HTTP/1.1 500 Internal Server Error
```
## Reassign a ticket



	PUT /users/tickets/:id/reassign


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>Ticket ID</p>							|

### Success Response

Success-Response:

```
HTTP/1.1 200 OK
{
  "id": 1,
  "title": "How do I into Node?",
  "description": "No seriously I don't get it."
}
```
### Error Response

Invalid ticket assignment

```
HTTP/1.1 400
{
  "message": "Cannot reassign ticket if it is not assigned to you."
}
```
Ticket not found

```
HTTP/1.1 404
{
  "message": "Ticket not found."
}
```
Invalid role

```
HTTP/1.1 400
{
  "message": "Ticket updating restricted to helpers."
}
```
Update error

```
HTTP/1.1 500 Internal Server Error
```
## Resolve a ticket



	PUT /users/tickets/:id/resolve


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>Ticket ID</p>							|

### Success Response

Success-Response:

```
HTTP/1.1 200 OK
{
  "id": 1,
  "title": "How do I into Node?",
  "description": "No seriously I don't get it."
}
```
### Error Response

Invalid ticket assignment

```
HTTP/1.1 400
{
  "message": "Cannot mark ticket as resolved if it is not assigned to you."
}
```
Ticket not found

```
HTTP/1.1 404
{
  "message": "Ticket not found."
}
```
Invalid role

```
HTTP/1.1 400
{
  "message": "Ticket updating restricted to helpers."
}
```
No solution provided

```
HTTP/1.1 400
{
  "message": "Resolved tickets should include a solution."
}
```
Update error

```
HTTP/1.1 500 Internal Server Error
```

