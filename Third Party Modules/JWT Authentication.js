/*

❤️❤️❤️ JWT Authentication ❤️❤️❤️

Chapter 1 : What is JWT ?  ✌️

  👉 JWT => JSON Web Token.

  Note: JWT is used to share secure information between two parties — a client and a server through accessible tokens.


  Note: HTTP is a stateless,
   so it remember nothing by itself after successfully server's response.

  Note: So, We need to use Auth Strategy for remember client.

  # Two most popular Auth Strategy are  ✅

    🟢 JWT Token

    🟢 Session Token



Chapter 2 : Install JWT  ✌️

  > npm install jsonwebtoken

  > const jwt = require( "jsonwebtoken" );

 

Chapter 3 : JWT Introduction ✌️

  Note: JWT consist of three parts separated by dots (.),

    1. Header  📌

    2. Payload  📌

    3. Signature  📌


  Example:  📝

   🔴Encoded
   
    eyJhbGciOiJIUzI1NiIsInR5cCI6I⭐3ODkwIrwinFtZSI6IndiaWF0iPodNTE2MjM5MDIyfQ⭐SflKxwRJSMeKKF2QT4fwpMeJf3

   👉 " Base64Url " encoded algorithm.


   🟢 Decoded

    1️⃣ HEADER : ( Information About That JWT ) [ PUBLIC ]
    
      > {
          "alg": "HS256",
          "typ": "JWT"      
        }

    2️⃣ PAYLOAD : ( Store Unique Data For Identify Specific User ) [ PUBLIC ]

      > {
          "id": "23455",
          "name": "Tangilur Rahman",
          "exp": 1647858198
        }

    3️⃣ SIGNATURE : (Secret-Key For Verify Specific User ) [SERVER]

      HMACSHA256(

        base64UrlEncode(header) + "."
         +
        base64UrlEncode(payload),
          
        your-256-bit-secret

      );


Chapter 4 : Create JWT Token  ✌️

  🌿 jwt.sign()

  👉 Return a promise.


  Syntax :  🧬

    const jwt = require('jsonwebtoken');
      
    async(req,res) =>{

      const jwtToken = await jwt.sign({payload : value,... }, "secretKey", { [option] : value });

    }

  👉  payload Object & secretKey String  must be define, 
     [option]  is OPTIONAL.


  Note: In " [option] " mainly define " {expiresIn : "time"} " Object,

   🟢 It's expireTime apply with only that token,
      Not any effect within Browser Session.


    #️⃣ expiresIn's values Format  ✅

      > "2 days", "10h", "7d" , "365d" etc...

      👉 If expireTime is up, then that token was destroyed automatically,
       user need to login again, Even Browser Session haven't expired.


  Example :  📝 

    app.get("/",async(req,res)=>{

      try {

        const jwtToken = await jwt.sign({id : 1, name : "Tangilur"},"i am token",{expiresIn : "365d"})

        res.send(jwtToken);  👉 encoded format

      } catch (error) {

        console.log(error.message);     
      }

    });


  Note : 

    👉 HEADER =>  Header is store just some metadata about the token itself. ( like which algorithm used,type etc... ),

      🟢 Automatically created by JWT.

       
    👉 PAYLOAD => PAYLOAD is mainly used for store user's unique data which help to identify specific User.

      1️⃣ Inside payload Object, we can define user's multiple data in "key:value" pairs.

      3️⃣ Anyone will be able to decode payload Object and read them,
       So, shouldn't be define any sensitive data in here.
       
      3️⃣ " expiresIn " property also attach with that PAYLOAD Object.


    👉 SIGNATURE => The secret-key is the signature, it's used to verification token,
      It's not public, control by programmer.

      ⚠️ It's better to define SIGNATURE in minimum 32 Characters.


    
  👉 Browser only store JWT token's Header & Payload data in encoded format into Browser cookies storage.

    🟢 Set => response.cookie("cookieName",token,{expires : new Date(...)});

    🟢 Get => request.cookies.cookieName

  #️⃣ Anyone can get JWT token's Header & Payload data from Browser cookies storage, but Signature is used to verify that token.


      
Chapter 5 : Verify JWT Token  ✌️

  🌿 jwt.verify();

  👉 Return a promise.


  Syntax :  🧬

    async(req,res,next)=>{

      try{

        const verify = await jwt.verify( jwtTokenFromBrowserCookies,ourSecretKey );

        res.send(verify);

        next();

      }catch(error){
        res.send(error.message);
      }
    }

  Note: Verify "Token + Secret-Key" both are match or not.

  👉  
    🟢 If token is valid then return that token's " PAYLOAD " data in JSON format.
  or,
    ❌ If token is Invalid then throw ERROR (" invalid signature ").


  Example :  📝

    🟠 index.js

    const cookie = require("cookie-parser");

    app.use(cookie());


    🟠 Verify.js

    app.get("/",async(req,res,next)=>{

      try {

       const verify = await jwt.verify(req.cookies.demoToken,"i am token"); 

        res.send(verify)
          
      } catch (error) {

        console.log(error.message);
          
      }

    });

    #️⃣ Suppose : demoToken => "eyJhbGciOiJIUzI.eyJuYW15OH0.Rm8Z8IDzF3k"
    


Chapter 6 : JWT Procedure  ✌️

  1️⃣ Create JWT Token By Using SingUp Or LogIn's Form Data  

    > const token = await jwt.sign({ name: req.body.name,... }, 'i am token');


    #️⃣ If we want to create JWT token by using MongoDB's unique "_id" & attach That token in that document  [ When SignUP ]  🔴 [ Not Requirement ]   


    Example :  📝

    > const document = model(documentObject);  // created MongoDB's unique _id
    
      const token = await jwt.sign({ id: document._id }, 'i am token');

      document.tokens = [].concat({ token: token });

      document.save();


  2️⃣ Add JWT token into HTTP Response's Headers [ When LogIN] (Also Store In Browser Cookies ) 


    Example:  📝

      🟢 response.cookie("cookieName",tokenValue,{ expires : new Date(Date.now() + 60 *1000 )})

      👉 " { expires : time } " OPTIONAL, 
       But, if we don't define then get Default Browser Session( until Browser's window close).

       ⚠️ So better, must be define it.

      👉 If " { expires : time } " define then Browser Open or close doesn't even matter,
       until expiredTime up or logout or clear cookies or token expired from Browser.
  


  # Verify Token As A Middleware  ✅

    Example:  📝

    🟠 index.js

      const cookie = require("cookie-parser");

      app.use(cookie());


    🟠 verify.js

      const jwt = require('jsonwebtoken');

      const verifyToken = async (req, res, next) => {

        try {

         await jwt.verify(req.cookies.cookieName, process.env.SECRET_KEY);
          next();

        } catch (error) {
          res.redirect('/login');
        }
      };

      module.exports = verifyToken;


    👉 Now, we can protect any-pages just declare that middleware. 

      Example : app.get("/transition",verifyToken,(req,res)=>{...} );


  # LOG OUT  with JWT  ✅

    🌿 response.clearCookie("CookieName");
  
    Example:  📝

      public.get('/logout', verifyToken, async (req, res) => {

        try {

          res.clearCookie('cookieName');
          res.redirect("/");
          
        } catch (error) {
          res.send(error.message);
        }

      });


    👉 That cookie also remove from Browser Cookies Storage.



❤️ NPM : https://www.npmjs.com/package/jsonwebtoken

😊 END 😊

*/