'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("ReadingStatuses", [
      {
        id: 1,
        BookID: 1,
        DateStarted: new Date("2026-01-01"),
        DateFinished: new Date("2026-01-15"),
        Rating: 5,
        Status: "Leído",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        BookID: 2,
        DateStarted: new Date("2026-02-01"),
        DateFinished: null,
        Rating: null,
        Status: "En progreso",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        BookID: 3,
        DateStarted: null,
        DateFinished: null,
        Rating: null,
        Status: "Pendiente",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ReadingStatuses", null, {});
  }
};
