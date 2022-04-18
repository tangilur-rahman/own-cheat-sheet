

const express = require("express");
require("dotenv").config();
const todos = require("./routes/todos.route");

const app =  express();

const PORT =  process.env.PORT ;

app.use( express.json());

// routing
app.use("/todos",todos);


app.use((req,res,next)=>{
    res.status(404).send("404 Not Found");
})

app.use((error,req,res,next)=>{
    if(res.headersSent){
        return next(error) 
    }
    res.sendStatus(500);
})

app.listen(PORT,()=> console.log(`server was running at http://localhost:${PORT}`));
