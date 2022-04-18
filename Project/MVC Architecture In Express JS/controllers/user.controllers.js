
const path = require('path');
const userData = require("./../models/userData.models")


const sendHTML = (req, res) => {
 
  res.sendFile(path.join(__dirname + './../views/users.html'));
};



const getUserData =  (req, res) => {
  userData.push(req.body)

  res.send(userData);
}

const controller = {
    sendHTML,getUserData
}
module.exports  = controller;