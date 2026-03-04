'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReadingStatuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BookID: {
        references: {model: 'Books',key: 'id'},
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Status: {
        type: Sequelize.STRING
      },
      DateStarted: {
        type: Sequelize.DATE
      },
      DateFinished: {
        type: Sequelize.DATE
      },
      Rating: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('ReadingStatuses');
  }
};