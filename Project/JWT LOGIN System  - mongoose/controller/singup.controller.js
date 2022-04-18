const path = require('path');
const model = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// get("/")
const displayForm = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/signup.html'));
};

// post("/getForm")
const insertFormData = async (req, res) => {
  try {

    
    //create hashPassword 
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    // document object

    const documentObj = {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      gender: req.body.gender
    };


    const document = model(documentObj);

    // create token
    const token = await jwt.sign({ id: document._id }, 'i am token');

    // insert token into that document object
    document.tokens = [].concat({ token: token });

    
    //insert that document into mongoDB
    document.save((error) => {
      if (error) {
        res.send(error.message);
      } else {
        res.send('inserted one document successfully');
      }
    });
  } catch (error) {
    res.send(error.message);
  }
};

// export
module.exports = controller = {
  displayForm,
  insertFormData
};
