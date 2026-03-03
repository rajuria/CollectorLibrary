'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      AuthorID: {
        references: {model: 'Autores',key: 'id'},
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Genre: {
        type: Sequelize.STRING
      },
      PublicationYear: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      isbn: {
        type: Sequelize.STRING
      },
      PageCount: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Books');
  }
};