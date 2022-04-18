/*
❤️❤️❤️ Multer ❤️❤️❤️
  

  🌿  We already knew,

    1. JSON  =>  express.json();

    2. Text  =>  express.text();

    3. urlencoded => express.urlencoded();

    4. stream  => express.raw();

   but, when if want to sended {"content-type": "multipart/form-data"},
    then we need to used external middleware "multer".

  
  #️⃣ Install "multer" Middleware  ✅

    >  npm install multer

    > const multer = require("multer");



  #️⃣ Upload Single File ✅


    🟠 index.html

      <form action="http://localhost:3000/" method="post" enctype="multipart/form-data" 🎯>
      
        <input type="file" name="avatar"🎯 id="file" />
        <input type="submit" value="Submit" />
       
      </form>



    🟠 index.js

      const express = require("express");
      const app = express();

      const multer = require("multer");

      const upload = multer({
        dest : "./upload/"
      })

      app.post('/', upload.single('avatar'), (req, res) => {

        res.send("upload successfully")

      });

      app.listen(3000);


      👉 Here "upload" is a Middleware.

      👉 dest => define folderPath where files upload.

      👉 "avatar" => Input Field Name.



  #️⃣ Upload Multiple File Through Single Input Field  ✅

    Syntax:  🧬

      upload.array( inputName, maximumValue);


    Example:  📝

    🟠 index.html

      <form action="http://localhost:3000/" method="post" enctype="multipart/form-data">
      
        <input type="file" name="avatar" id="file" multiple/>
        <input type="submit" value="Submit" />
       
      </form>


    🟠 index.js

      const express = require("express");
      const app = express();

      const multer = require("multer");

      const upload = multer({
        dest : "./upload/"
      })

      app.post('/', upload.array('avatar' , 5), (req, res) => {

        res.send("upload successfully")

      });

      app.listen(3000);


    👉 That input field can upload maximum 5 files.


   
  #️⃣ Upload file from multiple Input fields ✅

    Example:

    🟠 index.html

      <input type="file" name="avatar" id="file" multiple  />

      <input type="file" name="gallery" id="file" multiple />


    🟠 index.js

      app.post('/file',

       upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'gallery', maxCount: 3 },
        ...
       ]), 

       (req, res) => { 
         res.send("successfully");
       });

     

  #️⃣ If need to handle just form-data in {"content-type": "multipart/form-data"}, don't upload any file ✅


    Example:  📝
     
      app.post('/profile', upload.none(), (req, res) => {

        res.send(req.body)

      });

    
    👉 Similar to "express.urlencoded()" method, sended Form Data attach into "request.body" property.



  ❤️ Get more knowledge 

    LWS : https://github.com/learnwithsumit/express-js-tutorial/blob/lesson-23/index.js

    API : http://expressjs.com/en/resources/middleware/multer.html


*/


// Example from Learn With Sumit

const express = require("express");
const multer = require("multer");
const path = require("path");

// File upload folder
const UPLOADS_FOLDER = "./uploads/";


// define the storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();

    cb(null, fileName + fileExt);
  },
});

// prepare the final multer upload object
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1MB
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("Only .jpg, .png or .jpeg format allowed!"));
      }
    } else if (file.fieldname === "doc") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Only .pdf format allowed!"));
      }
    } else {
      cb(new Error("There was an unknown error!"));
    }
  },
});

// express app initialization
const app = express();

// application route
app.post(
  "/",
  upload.fields([
    {
      name: "avatar",
      maxCount: 2,
    },
    {
      name: "doc",
      maxCount: 1,
    },
  ]),
  (req, res) => {

    console.log(req.file);    // when single file
    console.log(req.files);   // when multiple files

    res.send("success");
  }
);

// default error handler
app.use((err, req, res, next) => {
  if (err) {
    if (err instanceof multer.MulterError) {
      res.status(500).send("There was an upload error!");
    } else {
      res.status(500).send(err.message);
    }
  } else {
    res.send("success");
  }
});

app.listen(3000, () => {
  console.log("app listening at port 3000");
});
