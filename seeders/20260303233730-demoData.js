'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Autores", [
      {
        id: 1,
        FirstName: "J.K.",
        LastName: "Rowling",
        Nationality: "Británica",
        BirthYear: 1965,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        FirstName: "George R.R.",
        LastName: "Martin",
        Nationality: "Estadounidense",
        BirthYear: 1948,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        FirstName: "Gabriel García",
        LastName: "Márquez",
        Nationality: "Colombiana",
        BirthYear: 1927,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    return queryInterface.bulkInsert("Books", [
      {
        id: 1,
        Title: "Harry Potter y la piedra filosofal", 
        AuthorID: 1, 
        Genre: "Fantasía",
        PublicationYear: 1997,
        isbn: "978-0747532699",
        PageCount: 223,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        Title: "Juego de Tronos",  
        AuthorID: 2,
        Genre: "Fantasía",
        PublicationYear: 1996,
        isbn: "978-0553103540",
        PageCount: 694,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        Title: "Cien años de soledad",  
        AuthorID: 3,
        Genre: "Realismo mágico",
        PublicationYear: 1967,
        isbn: "978-0060883287",
        PageCount: 417,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
    return queryInterface.bulkDelete("Autores", null, {});
  }
};
