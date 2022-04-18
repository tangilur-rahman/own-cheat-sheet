/*
❤️❤️❤️ Heroku ❤️❤️❤️

  🌿 Heroku is a platform as a service (PaaS) that enables developers to build, run and operate applications entirely in the cloud.

  🌿 Heroku almost similar as Github.


⭐⭐⭐ Must be install Git CLI & Heroku CLI Software in our PC.



#️⃣ Simple Node JS Project Hosting

  ⭐ Procedure almost same as like relation between Git & Github.


  🌿 Procedure : 

  🎯 Step 1 : Inside index.js File  [server]
  
    > const PORT = process.env.PORT || 4000;


  🎯 Step 2 : Inside package.json File  [server]
  
    "scripts": {
      "start": "node startingFile.js"
    }

  && 

  🎯 Step 3 : ProcFile File

      > web: node startingFile.js

   👉 Must be define execution starting file.


  🎯 Step 4 : Git Initialization

    > git init

  🎯 Step 5 : Login Heroku 

    > heroku login

  🎯 Step 6 : CLI => heroku create projectName ❗ Create a project from Heroku Dashboard

  🎯 Step 7 : Copy that project's git-URL from Heroku project's setting

  🎯 Step 8 : CLI => git remote add urlReferenceName git-URL

    👉 Step-7 & Step-8 can SKIP, if CLI => heroku create projectName  [AUTOMATICALLY GET]


  🎯 Step 9 : CLI => git add --all && git commit -m "commit message"

  🎯 Step 10 : CLI => git push -u urlReferenceName master


  ⭐ We can multiple-times modify codes then add, commit & push on Heroku as like Github.



#️⃣ MERN Project Hosting

  ⭐⭐⭐ Only server-side (Node JS) can submit on Heroku.

  👉 At first get React-App's "built" folder and paste it inside server folder. 

  
  🌿 Extra Procedure : 

    if (process.env.NODE_ENV == "production") {

      app.use(express.static("build"));

      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + "/build/index.html"));
      });
      
    } else {
      app.get("/", (req, res) => {
        res.send("client disconnected");
      });
    }


  ⭐ Make sure, app.get("/") router isn't active in server-side by default,
   cause, that router get from client-side.


  ⭐ Inside ".env" file can declare Database_URL, JWT's Secret_Key etc, if we want. 
   
    👉 Don't define PORT-Number, Heroku Provide that 
     & Don't add that file into ".gitignore" file.

  or, We can also define ".env" file's key & value on Heroku server manually from project's setting.


  😊 END 😊 

*/