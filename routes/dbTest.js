var routes = require("express").Router();

var dbTestController = require("../controllers/dbTest.js");
let getAllAuthors = dbTestController.getAllAuthors;

let createSpecificAuthor = dbTestController.createSpecificAuthor;
let createAuthor = dbTestController.createAuthor;

routes.get("/get",getAllAuthors);
routes.post("/createSpecific", createSpecificAuthor);
routes.post("/create",createAuthor);

module.exports = routes;