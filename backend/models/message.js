'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Message.hasMany(models.Comment, { foreignKey: "messageId" });

			models.Message.belongsTo(models.User, {
        foreignKey: "userId"
        // {
				// 	allowNull: false
				// }
			});
    }
  };
  Message.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
