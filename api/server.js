const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate');
const authRouter = require('../auth/auth-router');
const recRouter = require('../recommendations/rec-router')
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/recommendations', authenticate, recRouter);
module.exports = server;