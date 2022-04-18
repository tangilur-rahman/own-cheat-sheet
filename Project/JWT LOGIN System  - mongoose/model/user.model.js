const mongoose = require('mongoose');

// dotenv import
require('dotenv').config();
const database_url = process.env.DATABASE_URL;

// connection with mongodb
mongoose
  .connect(database_url)
  .then(() => console.log('connection establish successfully'))
  .catch(() => console.log('something was wrong when connection with mongodb'));

//create schema
const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  tokens: [
    {
      token: {
        type: 'String',
        require: true
      }
    }
  ]
});

// create model
const model = mongoose.model('userinfo', schema);

module.exports = model;
