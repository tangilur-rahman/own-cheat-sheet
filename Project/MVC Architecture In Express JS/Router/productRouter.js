const express = require('express');
const multer = require('multer');
const controller = require('./../controllers/product.controllers');


const product = express.Router();

const upload = multer();


product.get('/', controller.sendHTML);

product.post('/getProductData', upload.none(), controller.getProductData);

module.exports = product;
