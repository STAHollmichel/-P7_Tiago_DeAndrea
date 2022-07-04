'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        },
      },
      postTittle: {
        type: Sequelize.TEXT
      },
      postDescription: {
        type: Sequelize.TEXT
      },
      postPhoto: {
        type: Sequelize.STRING
      },
	    userLike: {
	      type: Sequelize.INTEGER,
   	  },
      usersLiked: {
	      type: Sequelize.STRING,
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};