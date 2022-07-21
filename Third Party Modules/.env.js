/*
❤️❤️❤️ .env ❤️❤️❤️


#️⃣ What is .env file ?  ✌️

  👉 .env  => environment file

  Note: Secret-Hidden file, Only developer can access that file's variables from anywhere.


#️⃣ Why .env file ?  ✌️

  Note: To store private environment variables for our application.

    Example:  📝

      ⭕ HTTP Port

      ⭕ Database URL

      ⭕ API Keys 

      ⭕ JWT's Secret Key etc.


  Note: Github / Heroku also support the usage of environment variable.


#️⃣ How to use .env variables ?  ✌️

  ⭕ Create a ".env" file in the ROOT directory.  📌

  ⭕ Inside that file, define environment variables using UPPERCASE letters and under_score if more than one word. ( standard )  📌

   Example : 📝

    PORT

    DATABASE_URL


  ⭕ Assign the values without double quotation & space & end with semicolon (;)   📌

   Example: 📝

    PORT=3000

    DATABASE_URL=mongodb+srv://mongo:demo1234...


  ⭕ We can make comments using "#️"  📌

   Example: 📝

    # server port
    PORT=3000

  ⭕ install "dotenv" external package module   📌
  
    > npm install dotenv 

  ⭕ require dotenv package  📌
  
    > require("dotenv").config(); 

    ⭐ Only define "index.js" file then can access that package from anywhere in our entire application.


  ⭕ Access the ".env" file's variables from anywhere using process.env.VARIABLE_NAME  📌
  
   Example :  📝
   
    process.env.PORT;



🌿 Finally, declare that file into ".gitignore"  file, if we want.


Example:  📝

  🟢 .env 

    # server port
    PORT=3002

    # developer name
    name=Tangilur_Rahman


  🟢 server.js

    require("dotenv").config();

    const PORT = process.env.PORT;

    app.get("/",(req,res)=>{

      re.send(process.env.name);

    });

    app.listen(process.env.PORT);


❤️ NPM : https://www.npmjs.com/package/dotenv

😊 END 😊

*/

