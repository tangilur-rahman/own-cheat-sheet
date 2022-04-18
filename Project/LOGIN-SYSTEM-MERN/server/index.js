/*
 * File: index.js
 * Project: server
 * Description :
 * Author: MD.Tangilur Rahman
 * File Created: Monday, 5th April 2022 9:19:03 pm
 * Last Modified: Monday, 5th April 2022 9:19:39 pm
 */

// dependencies
const express = require("express");
const cookie = require("cookie-parser");

// import env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// create main router
const app = express();

// insert data into request Object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());

// import router
const home = require("./router/router.home");
const profile = require("./router/router.profile");
const contract = require("./router/router.contract");
const signup = require("./router/router.signup");
const login = require("./router/router.login");
const logout = require("./router/router.logout");

// redirect router
app.use("/home", home);
app.use("/signup", signup);
app.use("/login", login);
app.use("/profile", profile);
app.use("/contract", contract);
app.use("/logout", logout);

// 404 ERROR page handle
app.use((req, res) => {
	res.status(404).json({ error: "File Not Found" });
});

// own ERROR handler
app.use((error, req, res, next) => {
	if (res.headersSent) {
		next(error);
	} else if (error) {
		res.status(500).json({ error: error.message });
	} else {
		next(error);
	}
});

// start server
app.listen(PORT, () =>
	console.log(`server was running at http://localhost:${PORT}`)
);
