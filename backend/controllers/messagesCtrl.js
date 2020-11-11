// Imports
const models = require('../models');
const jwtUtils = require('../utils/jwt.utils');
const multer = require('../middleware/multer-config');
const fs = require('fs');

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
    var title = req.body.title;
    var content = req.body.content;
    var attachment = null;
    if(req.file !== undefined)
      attachment = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

    if (title == null || content == null) {
      return res.status(400).json({
        'error': 'missing parameters ! '
      });
    }

    if (title.length <= TITLE_LIMIT || content.length <= CONTENT_LIMIT) {
      return res.status(400).json({
        'error': 'invalid parameters'
      });
    }

    models.User.findOne({
        attributes: ['id'],
        where: {
          id: userId
        }
      })

      .then(function (user) {
        if (user) {

          models.Message.create({
              userId: user.id,
              title: title,
              content: content,
              attachment: attachment,
            })

            .then(function () {
              return res.status(201).json({})
            })

            .catch(function (err) {
              return res.status(500).json({
                'error': `cannot post message: ${err}`
              });
            })

        } else {
          return res.status(409).json({
            'error': 'user not found'
          });
        }

      })
      .catch(function (err) {
          return res.status(500).json({
            'error': `unable to verify user: ${err}`
          });
        }

      );
  },

  listMessages: function (req, res) {
    console.log("listMessages")
    var fields = req.query.fields;
    var limit = parseInt(req.query.limit);
    var offset = parseInt(req.query.offset);
    var order = req.query.order;

    if (limit > ITEMS_LIMIT) {
      limit = ITEMS_LIMIT;
    }

    models.Message.findAll({
      order: [(order != null) ? order.split(':') : ['updatedAt', 'DESC']],
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
        res.status(404).json({
          "error": "no messages found"
        });
      }
    }).catch(function (err) {
      console.log(err);
      res.status(500).json({
        "error": "invalid fields"
      });
    });
  }
}