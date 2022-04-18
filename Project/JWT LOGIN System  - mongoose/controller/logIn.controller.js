const model = require('../model/user.model');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// get("/")
const loginForm = (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/login.html'));
};

// post("/")
const loginHandler = async (req, res) => {
  try {
    const document = await model.findOne({
      name: req.body.name,
      email: req.body.email
    });

    const verify = await bcrypt.compare(req.body.password, document.password);

    // create token
    const token = await jwt.sign({ id: document._id }, process.env.SECRET_KEY,{expiresIn : "1d"});

    res.cookie('jwt', token);

    res.redirect('/');
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = controller = {
  loginForm,
  loginHandler
};
