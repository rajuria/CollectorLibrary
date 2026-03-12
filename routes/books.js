var routes = require("express").Router();

var BooksController = require("../controllers/books.js");
let getByISBN = BooksController.getByISBN;
let createBook = BooksController.createBook;


routes.get("/get/:isbn",getByISBN);
routes.post("/createBook",createBook);

module.exports = routes;