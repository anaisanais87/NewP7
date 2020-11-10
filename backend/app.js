const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');
const commentRoutes = require('./routes/comment');

const path = require('path');


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/messages', messageRoutes);

app.use('/api/users', userRoutes);

app.use('/api/comments', commentRoutes);

module.exports = app;
