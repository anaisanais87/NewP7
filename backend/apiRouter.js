//Imports
const express = require('express');
const usersCtrl = require('./routes/usersCtrl');
const messagesCtrl = require('./routes/messagesCtrl');
const likesCtrl = require('./routes/likesCtrl');
const auth = require('./middleware/auth');
const multer = require('./middleware/multer-config');


//Router
exports.router = (function() {
    const apiRouter = express.Router();

    //Users routes
    apiRouter.route('/users/register/', auth).post(usersCtrl.register);
    apiRouter.route('/users/login/', auth).post(usersCtrl.login);
    apiRouter.route('/users/me/', auth).get(usersCtrl.getUserProfile);
    apiRouter.route('/users/me/', auth).put(usersCtrl.updateUserProfile);
    apiRouter.route('/users/delete/', auth).delete(usersCtrl.deleteUserProfile);

    //Messages routes
    apiRouter.route('/messages/new/', auth, multer).post(messagesCtrl.createMessage);
    apiRouter.route('/messages/', auth).get(messagesCtrl.listMessages);

    //Likes routes
    apiRouter.route('/messages/:messageId/vote/like', auth).post(likesCtrl.likePost);
    apiRouter.route('/messages/:messageId/vote/dislike', auth).post(likesCtrl.dislikePost);

    return apiRouter;
})();
