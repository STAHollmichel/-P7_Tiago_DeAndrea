'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {foreignKey: 'userId', constraints: false}, { onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks:true })
      Post.hasMany(models.Comment) 
    }
  };

  Post.init({
    userId: {
      type:DataTypes.INTEGER,
            allowNull: false
    },
    postDescription: DataTypes.TEXT,
    postPhoto: DataTypes.STRING,
    userLike: DataTypes.INTEGER,
    usersLiked: DataTypes.STRING
  }, 

  {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};