
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.mongoDB_Url)
.then(()=>console.log(`connection successfully`))
.catch(error => console.log(error.message));


const todoSchema = mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  description: String,

  status: {
    type: String,
    enum: ['active', 'inactive'],
  },

  date: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model("todo",todoSchema);


module.exports = model;