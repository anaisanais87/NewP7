// Imports
const models   = require('../models');
const asyncLib = require('async');
const jwtUtils = require('../utils/jwt.utils');
const multer = require('../middleware/multer-config');

// Constants
const TITLE_LIMIT = 2;
const CONTENT_LIMIT = 4;
const ITEMS_LIMIT = 50;

// Routes
module.exports = {
  createMessage: function (req, res) {
    // Getting auth header
    var headerAuth = req.headers['authorization'];
    var userId = jwtUtils.getUserId(headerAuth);

    // Params
    var title      = req.body.title;
    var content    = req.body.content;
    // var attachment = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    if (title == null || content == null) {
      return res.status(400).json({ 'error': 'missing parameters ! ' });
    }

    if (title.length <= TITLE_LIMIT || content.length <= CONTENT_LIMIT) {
      return res.status(400).json({ 'error': 'invalid parameters' });
    }
    

    models.User.findOne({
      attributes: ['id'],
      where: { 
        id: userId,
      }
    })
    
      .then(function (user) {
        // console.log(userId)
        if (user) {
            models.Message.create({
            title: title,
            content: content,
            likes: 0,
            // attachment: attachment,
            userId: user.id
          })
          
            .then(function () {
              console.log(user)
              return res.status(201).json({  })
            })

            .catch(function (err) {
              // console.log(err)
              return res.status(500).json({ 'error': `cannot post message: ${err}` });
            })

        } else {
          return res.status(409).json({ 'error': 'user not found' });
        }

      })
        .catch(function (err) {
          return res.status(500).json({ 'error': `unable to verify user: ${err}` });
        }

      );
    },


  //   asyncLib.waterfall([
  //     function(done) {
  //       models.User.findOne({
  //         where: { id: userId }
  //       })
  //       .then(function(userFound) {
  //         done(null, userFound);
  //       })
  //       .catch(function(err) {
  //         return res.status(500).json({ 'error': 'unable to verify user' });
  //       });
  //     },
  //     function(userFound, done) {
  //       if(userFound) {
  //         models.Message.create({
  //           title  : title,
  //           content: content,
  //           likes  : 0,
  //           UserId : userFound.id
  //         })
  //         .then(function(newMessage) {
  //           done(newMessage);
  //         });
  //       } else {
  //         res.status(404).json({ 'error': 'user not found' });
  //       }
  //     },
  //   ], function(newMessage) {
  //     if (newMessage) {
  //       return res.status(201).json(newMessage);
  //     } else {
  //       return res.status(500).json({ 'error': 'cannot post message' });
  //     }
  //   });
  // },

  listMessages: function (req, res) {
    var fields = req.query.fields;
    var limit = parseInt(req.query.limit);
    var offset = parseInt(req.query.offset);
    var order = req.query.order;

    if (limit > ITEMS_LIMIT) {
      limit = ITEMS_LIMIT;
    }

    models.Message.findAll({
      order: [(order != null) ? order.split(':') : ['title', 'ASC']],
      attributes: (fields !== '*' && fields != null) ? fields.split(',') : null,
      limit: (!isNaN(limit)) ? limit : null,
      offset: (!isNaN(offset)) ? offset : null,
      include: [{
        model: models.User,
        attributes: ['username']
      }]
    }).then(function (messages) {
      if (messages) {
        res.status(200).json(messages);
      } else {
        res.status(404).json({ "error": "no messages found" });
      }
    }).catch(function (err) {
      console.log(err);
      res.status(500).json({ "error": "invalid fields" });
    });
  }
}