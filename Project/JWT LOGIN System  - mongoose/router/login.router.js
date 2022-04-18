
const express = require("express");
const controller = require("../controller/logIn.controller");

const  login = express.Router();

login.get("/",controller.loginForm)

login.post("/",controller.loginHandler);



module.exports = login;