
const express = require("express");
const controllers = require("./../controllers/todos.controllers");

const todos = express.Router();

// request.params related router always define later

todos.get("/all",controllers.getAllData);

todos.get("/:title",controllers.getData);


todos.post('/all', controllers.insertAllData);

todos.post("/",controllers.insertData);



todos.put("/all",controllers.updateAllData);

todos.put("/:title",controllers.updateData);


todos.delete("/all",controllers.deleteAllData);

todos.delete("/:title",controllers.deleteData);



module.exports = todos;