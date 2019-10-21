const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const apiDoc = path.join(__dirname, '../apidoc');

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');
const ticketsRouter = require('./tickets/tickets-router.js');
const restricted = require('./auth/restricted-middleware.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/users', restricted, usersRouter);
server.use('/tickets', restricted, ticketsRouter);

server.use('/docs', express.static(apiDoc));

module.exports = server;
