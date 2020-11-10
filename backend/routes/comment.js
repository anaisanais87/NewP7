const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');

const commentsCtrl = require('../controllers/commentsCtrl');

const multer = require('../middleware/multer-config');


router.post('/:messageId/comment', auth, multer, commentsCtrl.createComment);

module.exports = router;

