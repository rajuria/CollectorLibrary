var routes = require("express").Router();

var routesTestController = require("../controllers/routesTest");
let getTest = routesTestController.getTest;
let postTest = routesTestController.postTest;

routes.get("/",getTest);

module.exports = routes;