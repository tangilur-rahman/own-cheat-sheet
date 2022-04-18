// import external modules
const express = require('express');
const cookie = require("cookie-parser");

// dotenv import
require('dotenv').config();
const PORT = process.env.PORT;

// import own modules
const signup = require('./router/signup.router');
const login = require('./router/login.router');
const public = require("./router/public.router")

// declare main router
const app = express();

// insert into req.body
app.use(express.urlencoded());
app.use(express.json());

// insert into req.cookies
app.use(cookie());

// routing
app.use("/",public)
app.use('/login', login);
app.use('/signup', signup);


// 404 not found
app.use((req, res, next) => {
  res.send('404 Page Not Found');
});

// own error handler

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`server was running at http://localhost:${PORT}`);
});
