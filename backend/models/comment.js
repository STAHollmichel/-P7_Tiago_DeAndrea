'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Comment extends Model {
    
    static associate(models) {
      Comment.belongsTo(models.User, {foreignKey: 'userId', constraints: false}, { onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks:true })
      Comment.belongsTo(models.Post, {foreignKey: 'postId', constraints: false}, { onDelete: 'CASCADE', onUPdate: 'CASCADE', hooks:true })
    }
  }

  Comment.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commentDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },

  {
    sequelize,
    modelName: 'Comment',
  });
  
  return Comment;
};