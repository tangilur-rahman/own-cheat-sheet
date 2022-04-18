/*

❤️❤️❤️ bcrypt ❤️❤️❤️

  👉 bcrypt is most popular library which help to create hash passwords.

  Note: bcrypt uses hash algorithm to convert encrypt password which is a one-way hash of the password.
  
  👉 Can't decrypt any way.


  👉 Even same words bcrypt are different.


  #️⃣ install bcrypt ✅

    > npm install bcrypt

 
  #️⃣ Create a hash password  ✅

    👉 Return a promise.

    Syntax:  🧬

    🟢 const bcrypt = require('bcrypt');

      bcrypt.hash(myPlaintextPassword, saltRounds)
      .then(result)
      .catch(error);

    or, 
    
    🟢 async (req,res)=>{

      const hashPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);

    }


    👉
      🟢 myPlaintextPassword => user inputted password

      🟢 saltRounds => number ( how many times bcrypt that password [cost-factor] )

        👉 minimum define 10.


    Example : 📝

      app.get("/",async(req,res)=>{

        try{

          const hashPassword = await bcrypt.hash("password",10);

          res.send(hashPassword);

        }catch(error){
          console.log(error.message);
        }
        
      });


  #️⃣ compare password  ✅

    👉 Return a promise.

    Syntax: 🧬

      🟢 bcrypt.compare(myPlaintextPassword, database.hashPassword)
      .then(check)
      .catch(error);

    or,

      🟢 async (req,res)=>{

        const match = await bcrypt.compare(myPlaintextPassword, database.passwordHash);

        }


    👉 " bcrypt.compare() " method return Boolean Value.

    👉 bcrypt.compare(sameHash , sameHash );  // false

    👉 bcrypt.compare(plainPassword , its_Hash );  // true


    Example: 📝

      app.get("/", async(req,res)=>{

        try{

          const match = bcrypt.compare("345","$2b$10$KpIFeC3w0CxIMhM15Iru3tWhYqU0pigPtt05qbBl78XrZtYyKl2");

          res.send(match);

        }catch(error){

          res.send(error);

        }
     
      });


  #️⃣ bcrypt in synchronous way  ✅

    1. const hashPassword = bcrypt.hashSync(myPlaintextPassword, saltRounds);

    2. const match = bcrypt.compareSync(myPlaintextPassword, hash); 


❤️ NPM : https://www.npmjs.com/package/bcrypt
    
 😊 END 😊

*/