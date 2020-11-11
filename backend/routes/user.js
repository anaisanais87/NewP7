const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/usersCtrl');

router.post('/register', usersCtrl.register);
router.post('/login', usersCtrl.login);
router.get('/me', usersCtrl.getUserProfile);
router.put('/me', usersCtrl.updateUserProfile);
router.delete('/delete', usersCtrl.deleteUserProfile);
router.get('/:id', usersCtrl.getSpecificUser)

module.exports = router;
