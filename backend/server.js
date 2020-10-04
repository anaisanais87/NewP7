//Imports
const express = require('express');
const bodyParser = require('body-parser'); 
const apiRouter = require('./apiRouter').router;
const { Server } = require('http');
const { access } = require('fs');

//Instantiate serve
const server = express();

//Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//Configure routes
server.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send('<h1>Bonjour sur mon serveur</h1>')
});



server.use('/api', apiRouter)

//Launch server
server.listen(3000, function() {
    console.log('Server en écoute');
});