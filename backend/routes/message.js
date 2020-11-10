const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');

const messagesCtrl = require('../controllers/messagesCtrl');

const multer = require('../middleware/multer-config');

router.post('/new/', multer,messagesCtrl.createMessage);
router.get('/', multer,messagesCtrl.listMessages);

module.exports = router;
