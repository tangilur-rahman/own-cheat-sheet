const express = require("express");
const controller = require("../controller/singup.controller");


const signup = express.Router();

signup.get("/",controller.displayForm);

signup.post("/getForm",controller.insertFormData);


module.exports = signup;