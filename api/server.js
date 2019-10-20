const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router.js');
const ticketsRouter = require('./tickets/tickets-router.js');
const restricted = require('./auth/restricted-middleware.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/tickets', restricted, ticketsRouter);

module.exports = server;
