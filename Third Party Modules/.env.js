/*

❤️❤️❤️ .env ❤️❤️❤️


# What is .env file ?  ✅

  👉 .env  => environment file

  Note: Secret- Hidden file, Only developer can access that file's variables from anywhere.


# Why .env file ?  ✅

  Note: To store private environment variables for our application.

    Example:  📝

      1. HTTP Port

      2. Database URL

      3. API Keys 

      4. JWT's Secret Key etc.


  Note: Github / Heroku also support the usage of environment variable.


# How to use .env variables ?  ✅

  1. Create a " .env " file in the ROOT directory.  📌

  2. Inside that file, define environment variables using UPPERCASE letters and under_score if more than one word. ( standard )  📌

   Example : 📝

    PORT

    DATABASE_URL


  3. Assign the values without double quotation & space & end with semicolon (;)   📌

   Example: 📝

    PORT=3000

    DATABASE_URL=mongodb+srv://mongo:demo1234...


  4. We can make a comment using " # "  📌

   Example: 📝

    # server port
    PORT=3000

  5. install " dotenv " external package   📌
  
    > npm install dotenv 

  6. require dotenv package  📌
  
    > require("dotenv").config(); 

    👉 Only define " index.js " file then can access that package from anywhere in our application.


  7. Access the ".env" file's variables from anywhere using process.env.VARIABLE_NAME  📌
  
   Example :  📝
   
    process.env.PORT;



👉 At the end, declare that file into " .gitignore "  file, if we want.


Example:  📝

  🟠 .env 

    # server port
    PORT=3002

    # developer name
    name=Tangilur_Rahman


  🟠 index.js

    require("dotenv").config();

    const PORT = process.env.PORT;

    app.get("/",(req,res)=>{

      re.send(process.env.name);

    });

    app.listen(process.env.PORT);


❤️ NPM : https://www.npmjs.com/package/dotenv

😊 END 😊

*/

