const express = require('express');
const multer = require('multer');
const controller = require("./../controllers/user.controllers");

const userRouter = express.Router();


const upload = multer();


userRouter.get('/',controller.sendHTML);

userRouter.post('/getUserData', upload.none(),controller.getUserData);



module.exports =  userRouter;
