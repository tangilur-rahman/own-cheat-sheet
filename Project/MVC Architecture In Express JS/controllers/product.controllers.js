const path = require('path');
const userData = require('./../models/product.models');

const sendHTML = (req, res) => {
  
  res.sendFile(path.join(__dirname + './../views/products.html'));
};

const getProductData = (req, res) => {
  userData.push(req.body);

  res.send(userData);
};

const controller = {
  sendHTML,
  getProductData,
};

module.exports = controller;
