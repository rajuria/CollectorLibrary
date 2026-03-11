var routes = require("express").Router();

var AuthorsController = require("../controllers/authors.js");
let getAuthors = AuthorsController.getAuthors;
let createAuthor = AuthorsController.createAuthor;


routes.get("/get",getAuthors);
routes.post("/post",createAuthor);

module.exports = routes;