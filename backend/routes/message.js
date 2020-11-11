const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');

const messagesCtrl = require('../controllers/messagesCtrl');

const multer = require('../middleware/multer-config');

router.post('/new/',auth, multer,messagesCtrl.createMessage);
router.get('/',auth, multer,messagesCtrl.listMessages);

module.exports = router;
