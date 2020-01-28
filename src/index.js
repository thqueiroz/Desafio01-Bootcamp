const express = require('express');
const routes = require('./routes');

// query params =/teste=1
// route params = /users/

const server = express();

server.use(express.json());
server.use(routes);

const users = ['Diego', 'Claudio', 'Victor'];

server.get('/devs')

server.listen(3333);