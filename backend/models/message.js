// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Message extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Message.init({
//     title: DataTypes.STRING,
//     content: DataTypes.STRING,
//     attachment: DataTypes.STRING,
//     likes: DataTypes.INTEGER
//   }, {
//     classMethods: {
//       associate: function(models) {
//         models.Message.belongsTo(models.User, {
//           foreignKey: "userId"
//           // {
//           //   allowNull: false
//           // }
//         })
//       }
//     },
//     sequelize,
//     modelName: 'Message',
//   });
//   return Message;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    attachment: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
        models.Message.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return Message;
};