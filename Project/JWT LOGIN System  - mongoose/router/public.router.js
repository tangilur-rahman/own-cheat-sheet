const express = require('express');
const verifyToken = require('../middleware/jwtMiddleware');
const path = require('path');

const public = express.Router();

public.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../views/home.html'));
});

public.get('/about', verifyToken, (req, res) => {
  res.sendFile(path.join(__dirname + './../views/about.html'));
});

public.get('/service', verifyToken, (req, res) => {
  res.sendFile(path.join(__dirname + './../views/service.html'));
});

public.get('/logout', verifyToken, async (req, res) => {
  try {
    res.clearCookie('jwt');
    res.redirect('/');
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = public;
