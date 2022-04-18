
const express = require("express");
const app = express();

const userRouter = require("./Router/userRouter");
const product = require("./Router/productRouter");

// router control
app.use("/user",userRouter);
app.use("/product",product);


// add express Api

app.use(express.static("views"));

app.use((req,res,next)=>{
    res.status(404).json({
        error : "404 Not Found"
    });
})

app.use((error,req,res,next)=>{
    if(error){
        res.status(500).send("Maybe Server have problem")
    }else{

        return next(error);
    }
})
app.listen(3000,()=>{
    console.log("i am running at http://localhost:3000");
})