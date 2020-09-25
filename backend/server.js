//Imports
const express = require('express');
const bodyParser = require('body-parser'); 
const apiRouter = require('./apiRouter').router;
const { Server } = require('http');

//Instantiate serve
const server = express();

//Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//Configure routes
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon serveur</h1>');
});

server.use('/api', apiRouter)

//Launch server
server.listen(8080, function() {
    console.log('Server en écoute');
});