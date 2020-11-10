// import

const models = require("../models");
const jwtUtils = require('../utils/jwt.utils');


module.exports = {
        createComment: function (req, res) {
            // Getting auth header
            var headerAuth = req.headers['authorization'];
            var userId = jwtUtils.getUserId(headerAuth);

            // Params
            var comments = req.body.comments;

            if (comments == null) {
                return res.status(400).json({
                    'error': 'missing parameters ! '
                });
            }

                models.Message.findOne({
                        attributes: ['id'],
                        where: {
                            id: messageId
                        }
                    })

                    .then(function () {
                        if (message) {

                            models.Comment.create({
                                comments: comments,
                            })

                            .then(function () {
                                return res.status(201).json({})
                            })

                            .catch(function (err) {
                                // console.log(err)
                                return res.status(500).json({
                                    'error': `cannot post comment: ${err}`
                                });
                            })
                

            } else {
                return res.status(409).json({
                    'error': 'message not found'
                });
            }

        })
        
        .catch(function (err) {
             return res.status(500).json({
            'error': `unable to verify message: ${err}`
        });
    }
    );
}
}




// exports.createComment = async (req, res) => {
// 	try {
// 		let comments = req.body.comments;
// 		const newCom = await models.Comment.create({
// 			comments: comments,
// 			UserId: req.user.id,
// 			MessageId: req.params.id
// 		});

// 		if (newCom) {
// 			res.status(201).json({ message: "Your comment has been sent", newCom });
// 		} else {
// 			throw new Error("Sorry , something gone wrong");
// 		}
// 	} catch (error) {
// 		res.status(400).json({ error: error.message });
// 	}
// };

// exports.getComment = async (req, res) => {
// 	try {
// 		const order = req.query.order;
// 		const comments = await models.Comment.findAll({
// 			attributes: [
// 				"id",
// 				"comments",
// 				"UserId",
// 				"MessageId",
// 				"createdAt",
// 				"updatedAt"
// 			],
// 			order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
// 			where: { postId: req.params.id },
// 			include: [{ model: models.User, attributes: ["username"] }]
// 		});
// 		if (comments) {
// 			res.status(200).send({ message: comments });
// 		} else {
// 			throw new Error("There are no comments");
// 		}
// 	} catch (error) {
// 		res.status(400).json({ error: error.message });
// 	}
// };

// // future project

// exports.deleteComment = async (req, res) => {
// 	try {
// 		const commentFound = await models.Comment.findOne({
// 			attributes: [
// 				"id",
// 				"comments",
// 				"UserId",
// 				"MessageId",
// 				"createdAt",
// 				"updatedAt"
// 			],
// 			where: { id: req.params.id }
// 		});

// 		await models.Comment.destroy({
// 			where: { id: req.params.id }
// 		});
// 		res.status(200).json({ message: "Comment has been deleted " });
// 	} catch (error) {
// 		res.status(400).json({ error: error.message });
// 	}
// };
// // UPDATE PROJECT FOR FUTURE
// exports.answerComment = async (req, es) => {};