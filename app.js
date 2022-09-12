require('dotenv').config(); // Require dotenv.config toma el archivo .env y sus variables

const Server = require('./models/server');

const server = new Server();

server.listen();