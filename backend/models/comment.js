"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {

		}
	};

	Comment.init({
		userId: DataTypes.INTEGER,
		messageId: DataTypes.INTEGER,
		comments: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				models.Comment.hasMany(models.User);
				models.Comment.hasMany(models.Message);

			}
		},

		sequelize,
		modelName: 'Comment',
	}
	);
	return Comment;
};
