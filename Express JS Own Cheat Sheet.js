/*

❤️❤️❤️ Express JS ❤️❤️❤️


Chapter 1 : What is Express JS ? ✌️
    
  Note: Express Js is a Node JS framework.

  Note: Express JS helps to create and maintain server more easily with less effort. ( many things are already created ).

  👉 We can also declare Node JS all modules in Express JS Directly.



Chapter 2 : Install Express JS ✌️

  Note: Express JS is a external modules so, at first need to install it.
  
    🧬 npm install express  ❤️



Chapter 3  : Creating an Express JS Server ✌️
      
  #️⃣ Importance HTTP methods ✅

    1. create    =>     POST
    2. read      =>     GET
    3. update    =>     PUT
    4. delete    =>     DELETE
    5. partial modifications => PATCH

  

  🌿 Create an Express JS server ✅
 
  Syntax: 🧬

    const function_Reference = require("express");
    
    const object = function_Reference();

    object.http_Method("/route",(request,response,next){

      // what do you want to do with server

    });
    
    object.listen(port_Number,()=>{

      // for checking server was running or not

    });


    👉 We can define server's callBack() function separately for every httpMethod & route in a server,
     ⭐ but each runtime only one callBack() function will be executed.

  
  Example:  📝

    const express = require("express");

    const app = express();

    app.get("/", ( request,response ) =>{});

    app.get("/about", ( request,response ) =>{});

    ...

    app.listen( 3000,()=> console.log("Server is running at 3000"));

     
  👉 Here the "express()" function is a top-level function which exported the entire express module.

    
  Advance : 👌

    🌿 Here that express is a function and it's an object also - not only in a sense.
      
    🌿 Every function in JavaScript is an object. It actually contain some custom properties, like express.json(), express.static() etc. When to use it like an normal object.


    Example:  📝

      let myInfo = () =>{
    
        return "Tangilur Rahman";
      }

      myInfo.age = 23;

      myInfo.address =() =>{

        return "Joypurhat";

      }

      console.log(myInfo());         // Tangilur Rahman

      console.log(myInfo.address()); // Joypurhat

      console.log(myInfo.age);       // 23
      


  #️⃣ In Background Express JS Module Structure ( obviously inside IIFE function ) 

    ⭕ Export.js 

      const express = () => {

        module.export = {exports whole express-module's object};

      };

      express.json = () => { module.exports = { method: ..., body: ..., headers: ... };

      express.raw = ()  => { module.exports = { method: ..., body: ..., headers: ... };

      express.text = ()  => { module.exports = { method: ..., body: ..., headers: ... };

      express.urlencoded = ()  => { module.exports = { method: ..., body: ..., headers: ... };

      express.static = () => { // to serves public assets }

      express.Router = () => { // help to create sub-router }



      
    ⭕ Import.js  

      const function_Reference = require("express");

      const get_Express_Module_object = function_Reference();

      
      👉 That "get_Express_Module_object" is Express main router.



  #️⃣ Example Hello-World

  ⭕ In Node JS ✅

    const http = require("http");

    const server = http.createServer((req,res)=>{

      if(request.url === "/" && request.method === "GET"){
         
        res.end("Hello-World");
          
      }
    })

    server.listen(4000,()=> console.log("server was running at 4000"));
      
      
  ⭕ In Express JS ✅

    const express = require("express");

    const app = express();

    app.get("/",( request, response ) =>{
         
      res.send("Hello-World");

    })

    app.listen(4000,()=> console.log("server was running at 4000"));
 


  #️⃣ Define multiple HTTP methods  ✅

    ⭐ Let's compare with Node JS

    ⭕ In Node JS

      const server = http.createServer((req, res) => {
  
        if(req.url === "/route", req.method === "GET"){

          // response

        }else if(req.url === "/route", req.method === "POST"){

          // response

        }

        ...
      });


    ⭕ In Express JS

      const express = require("express");

      const app = express();

      app.get("/",(request,response)=>{
        response.send("i am home page");    
      });

      app.post("/",(request,response)=>{
        response.send("i am home page with post method ");    
      });

      app.get("/about",(request,response)=>{
        response.send("i am about page");     
      });

      app.put("/service",(request,response)=>{
        response.send("i am service page");     
      });

      app.delete("/service",(request,response)=>{
        response.send("i am service page");       
      });

      app.listen(4000,()=> console.log("server was running"));


    ⭐ Start checking route top to bottom and each run-time only one satisfied server's callBack() function is execute,
    🌿 even if it have duplicate declaration.



Chapter 4 :  POSTMAN SOFTWARE ( For Testing )  ✌️

  👉 Browser only can handle and test "GET"  HTTP method,
    but If we want to testing  other HTTP methods then we need to install postman software.


  Example:  📝

    const express = require("express");

    const app = express();

    app.get("/",(request,response)=>{
        response.send("i am get for read")
    });

    app.post("/",(request,response)=>{
        response.send("i am put for create new")
    });

    app.put("/",(request,response)=>{
        response.send("i am put for update")
    });

    app.delete("/",(request,response)=>{
        response.send("i am delete for delete")
    });

    app.patch("/",(request,response)=>{
        response.send("i am patch for specific modify")
    });

    app.listen(4000,()=> console.log("server was running at 4000"));


 🌿 Now, Just paste url-address and select HTTP method then we will get output. ( Testing Purpose )



Chapter 5 : Express JS's most importance API  ✌️

  1️⃣ express      => "express" module returned [Function & Object] ( express ) 📌

  2️⃣ Application  => "express()" function returned Object [express-server] ( app )  📌  

  3️⃣ Request      => server_callback_function's "request" parameter  ( req )  📌

  4️⃣ Response     => server_callback_function's "response" parameter ( res )  📌 

  5️⃣ Router       => express.Router()  📌

  6️⃣ middleware   => It's a function which executing between request & response cycle  📌

    ⭐ In Express JS, every server_callback_function could be either a middleware or not.



Chapter 6 :  express API ✌️

  🌿 Not compulsory, to define that [Function & Object] name is "express", but it's standard.

  Syntax : 🧬

    const express = require("express");

    👉 That "express" is function & object both.

  
  ⭐ compare with Node JS (Easy to used)

    ⭕ In Node JS

    const http = require('http');

    const server = http.createServer((req, res) => {

      if ((req.url === '/route', req.method === 'POST')) {
        let array = [];

        req.on('data', (data) => {
          array.push(data);
        });

        req.on('end', () => {
          req.headers = { "content-type": "application.json" };

          req.body = array.toString();

          res.end(req.body);
        });
      }
    });

    server.listen(4000, () => console.log("server was running at 4000"));


    ⭕ In Express JS

      const express = require("express");

      const app = express();

      app.use(express.json());

      app.post("/",(req,res)=>{

        res.send(req.body);

      })

      app.listen(4000, () => console.log("server was running at 4000"));


    👉 Above Example used {"content-type" : "application/json"},
     but we can achieve with any content-type in same procedure.




  🌿 At first we need to understand, What is middleware? & What is app.use()?

    👉 Cause that "express" Object's all methods are pre-define middleware which them applied with application-level or router-level.

   
  #️⃣ What is middleware ?  ✅

    👉 Middleware is a normal function which can access to request & response Objects and take a callBack_function [next()]. ( 3 parameters )

    👉 It is those functions that are called between processing the request and sending the Response in our application.

    👉 Middleware are those functions which work like a door between server's request & response.

      💞 client send request => middleware => request object => response object => output

    👉 We can define multiple middleware between server's request & response.

    👉 Every middleware have ability to send response from there or throws ERROR,
     after that next middleware didn't work.

    👉 In Express JS, we can also modify request & response object through middleware.
     
    👉 Middleware also used to initialize request & response objects.

    👉 Middleware is kind of event's action define function which fire with client request.

     ⭐ So, must be initialize it before call [ app.use( middleware ) || sub-router.use( middleware ) ] 
     
     cause we knew only those event's action will be execute which them already registered.


    #️⃣ A middleware Basic Features ✅

      1. executes any code

      2. can modify Request & Response Objects

      3. can END Request/Response cycle  [res.send()]

      4. next() function is used to pass control to the next middleware function  
       
        👉 Function name anything can define. 

      5. throw & catch ERRORS.


    #️⃣ Types of middleware ✅

      1. application-level middleware   [app.use(middleware)]

      2. router-level middleware    [sub-router.use(middleware)]

      3. error-handling middleware 

      4. built-in middleware   [express.json(), express.urlencoded()  etc...]

      5. third-party middleware  [cookie-parser  etc...]



  #️⃣ What is app.use( middleware )?  ✅

    🌿 "app.use( middleware )" is a method that used to called application-level middleware,

     & impact into whole application ( request & response object )
     
     & execute that method with every client request ⭐.

    👉 In simple words "app.use()" is a method that takes another function (middleware) as a parameter and runs every time when the client request is sent to the server.

   
    Syntax : 🧬

      app.use( middleware );


    Example:  📝

      const middleware = () =>{

        console.log("That function will be execute with every client's request");

      }
      app.use( middleware );

    
    👉 "app.use( middleware )" method is used for called application-level middleware  which fire with every client request.

     So, must be initialize those middleware functions before called.
     
     cause we knew only those event's action will be execute which them already registered.

    🌿 We can define multiple "app.use()" methods in a application.

 

  ☢️☢️☢️ Learn more about that 2 concepts later. ☢️☢️☢️



  #️⃣ "express" Object some pre-define middleware ✅

    🌿 "express" Object's all pre-define middleware functions can used with application-level or router-level. 

    & we can define multiple "express" Object's middleware functions in any module.


    1. express.json();  📌

      Declaration :  🍀

        > app.use( express.json() ); 

        > sub_router.use(express.json());
        
      👉 "express.json()" method simply sended JSON Data {"Content-Type" : "application/json"} to convert into Object and attach them into "request.body" property.

      
      ⭕ In Background  ✅

        express.json = (req, res, next) =>{

            req.body = {};

            req.on( "data",(data)=>{

              req.body += data;
            });

            req.on("end", ()=>{
               
              return req.body;

            })

            next();
        }

        app.use(express.json());

      
      👉 Something like that procedure applied with "express" Object's all middleware functions.


      Example:  📝

       ⭕ JSON DATA SENDED 

        { 
          "name" : "Tangilur Rahman",
          "age"  : 23,
          "address" : "joypurhat"
        }

       ⭕ server.js 

        > app.use(express.json());

        app.get("/",(request,response)=>{

          log( request.body );  // whole object 

          log( typeof request.body );  //  object 

          log(request.body.age);  // 23 

          log(request.body.address);  // joypurhat 
            
        });

      

    2. express.urlencoded();  📌

      Declaration :  🍀

        > app.use( express.urlencoded() ); 

        > sub_router.use( express.urlencoded() ); 
        
      👉 "express.urlencoded()" method simply sended FORM Data {"Content-Type" : "application/x-www-form-urlencoded"} to convert into object and attach them into "request.body" property.

      
      Example:  📝

       ⭕ FORM DATA SENDED 

        <form
          action="/home"
          method="post"
          enctype="application/x-www-form-urlencoded"
        >

          <input type="text" name="name" id="text" />
          <input type="text" name="age" id="text2" />
          <input type="submit" value="Submit" />

        </form>


       ⭕ server.js  

        > app.use(express.urlencoded());

        app.get("/",(request,response)=>{

        
          log( request.body );  // whole object 

          log( typeof request.body );  //  object 

          log(request.body.name);  // inputted name value 

          log(request.body.age);  // inputted age value 
            
        });


    3. express.text();  📌

      Declaration :  🍀

        > app.use( express.text() ); 

        > sub_router.use( express.text() ); 
        
      👉 "express.text()" method simply sended PLAIN TEXT Data {"Content-Type" : "text/plain"} to convert into String and attach them into "request.body" property.

      
      Example:  📝

       ⭕ PLAIN TEXT SENDED 

        lorem1000


       ⭕ sever.js  

        > app.use(express.text());

        app.get("/",(request,response)=>{

          log( request.body );  // full String

          log( typeof request.body );  //  String

        });


    4. express.raw();  📌

      Declaration :  🍀

        > app.use( express.raw() ); 

        > sub_router.use( express.raw() ); 
        
      👉 "express.raw()" method simply sended Stream Data {"Content-Type" : "application/octet-stream"} to convert into object and attach them into "request.body" property.

       🌿 NO NEED TO USED 
        request.on("data",(data)=>{})
        request.on("end",()=>{})
      

      Example:  📝

       ⭕ Stream DATA SENDED 

        lorem1000

       ⭕ server.js  

        > app.use(express.raw());

        app.get("/",(request,response)=>{
   
          log( request.body );  // whole object with Buffer format

          log( typeof request.body );  //  object 

          log(request.body.toString());  // lorem1000 
            
        });

      
    5. express.static( "rootFolderName" ); 📌

      👉 We can't directly access static files such as images, CSS files and JavaScript files etc.

      👉 To serve static files such as images, CSS files and JavaScript files,
       use the "express.static()" built-in middleware function in Express JS.

      👉 "express.static()" method at first download everything from given root-folder 
       then insert them AUTOMATICALLY into response-object.

      ⭐ We can create multiple folders & files inside that root-folder.


      Syntax:  🧬

        app.use(express.static("root_folder_name"));


      Example:  📝

        ⭕ public

          1. CSS files
          2. JS files 
          3. Image, Videos, Pdf, Audio files etc...
          

        ⭕ index.html

          <html >
            <head>
              <link rel="stylesheet" href="./css/style.css" />
            </head>
            <body>

              <h1>It's Static Page</h1>
              <img src="./images/tangil.jpg" alt="image" />

            </body>
          </html>

        
        ⭕ server.js

          const express = require("express");

          const app = express();

          app.use(express.static("public"))

          app.get("/",(req,res)=>{

            res.sendFile(__dirname + "/index.html")
                    
          })

          app.listen(3000,()=>{
            console.log(`server was running at http://localhost:${3000}`);
          })


      👉 Instead of "public" we can define anyName of root-folder-name.



    6. express.Router();  📌

      🌿 "express.Router()" method return a object which used to create a new sub-router.

      👉 We can declare multiple "express.Router()" method for create multiple sub-router in our application.
  

      Example :  📝

        const express = require("express");

        const app = express();            // main router

        const admin = express.Router();   //  sub-router

        app.use("/admin", admin );        
        
          👉 when fire "/admin" then active "admin" sub-router.

        admin.all("/",(request,response)=>{})       
        
          👉 localhost:3000/admin/  

        admin.all("/home",(request,response)=>{})   
        
          👉 localhost:3000/admin/home

        admin.all("/about",(request,response)=>{}) 
        
          👉 localhost:3000/admin/about

        app.get("/home",(request,response)=>{}))    
        
          👉 localhost:3000/home

        app.listen(3000,()=>console.log("server is running at 3000"));




☢️☢️☢️ Learn More About "express.Router()" method in Router Chapter ☢️☢️☢️

      


Chapter 7 : Application API ( app )   ✌️

  🌿 Not compulsory to define that object name is "app",
    but it's standard.

  🍀 "app" object have some pre-define properties & methods.


  #️⃣ "app" object's only one property ✅

    1️⃣ app.locals 📌

      👉 Here "locals" is an object. 

      👉 The "app.locals" object can store local variables which them access into the whole application.

      👉 But only inside server's callBack_function.


    ⭕ In server.js  

      Syntax: 🧬

        app.locals.variable = anyValue;

        👉 We can insert multiple properties into app.locals Object


      Example:  📝

        const express = require("express");

        const app = express();

        app.locals.info = {

          name : "Tangilur Rahman",
          age : 23

        };
        app.locals.address = "Joypurhat";


        app.get("/",(request,response)=>{

          console.log(app.locals.info.name);
          console.log(app.locals.address);

          response.send(app.locals.info.name);
          })

          console.log(app.locals.age);  // undefined

        app.listen(3000,()=> console.log("server is running at 3000"));



    ⭕ Inside Any Exported modules or sub-router

      👉 Inside any exported modules or sub-router, we can access that locals object's properties through request & response object. 
        
      ⭐ Inside any exported modules or sub-router, we can't create new locals object's properties.


      Syntax:  🧬
        
        request.app.locals.variable_name;
      or,
        response.app.locals.variable_name;


      Example:  📝

        ⭕ server.js

          const express = require("express");
          const sub_Router = require('./router/sub_Router.js');
          const app = express();

          app.locals.info = {

            name : "Tangilur Rahman",
            age : "23"
          };

          app.use("/router",sub_Router);

          app.get("/",(req,res)=>{
            res.send(app.locals.info);
          });

          app.listen(3000,()=> console.log("server is running at 3000"));

          
        ⭕ sub_Router.js

          const express = require("express");
          const sub_router = express.Router();

          sub_router.get("/",(req,res)=>{

            console.log(request.app.locals.info.name);
            response.send(response.app.locals.info.age);

          })
  
          module.exports = sub_router;
       

          
  #️⃣ "app" object's all importance methods ✅
        
    1. app.get()  📌

      🌿 "app.get()" method used for achieve GET HTTP method.

      Syntax: 🧬

        app.get("/route", middlewareFunction );

        sub_router.get("/route", middlewareFunction );

      👉 same procedure applied with sub_routers within All HTTP methods.


      Example: 📝

        const express = require("express");

        const app = express();

        app.get("/",(request,response,next)=>{
            
          response.message1 = "i am one";
              
          next();
        })

        app.get("/",(request,response,next)=>{
            
          response.message2 = "i am two";

          next();
        })

        app.get('/', (req, res) => {
          res.message3 = " i am three"

          res.send(res.message1 + res.message2 + res.message3);
        });

        app.listen(3000,()=>console.log("Server is running at 3000 port"));
    
      
      👉 When response send from any middleware,
       then NO NEED to define "next()" function.
      
       🍀 cause response already sended no need to pass control another middleware.

      ⭐⭐⭐ With each client request, server can only send one response.

      
      #️⃣ That same procedure also applicable with 

        ⭕ app.post();

        ⭕ app.put();

        ⭕ app.delete();

        ⭕ app.patch();

        ⭕ app.all();



    2. app.post("/routes",( request,response, [middleware] ) => { });  📌

    3. app.put("/routes",( request,response, [middleware] ) => { });    📌
  
    4. app.delete("/routes",( request,response, [middleware] ) => { });  📌

    5. app.patch("/routes",( request,response, [middleware] ) => { });  📌
    
    6. app.all("/routes",( request,response, [middleware] ) => { });  📌

      👉 "app.all()" means applicable with all HTTP methods universal,
       not specific ( GET, POST, PUT, DELETE, PATCH etc.)
    

    7. app.listen( port, callback_function )  📌

      🌿 same as like Node JS

      👉 Inside "app.listen()" method we can define that server port number & a callBack() function.

      👉 That callBack() function is OPTIONAL, Just for checking server is running without any problem.

      Example: 📝

        app.listen(4000,()=> console.log("That Server was running at 4000 port"))
    


    8. app.param( name, callBack ) 📌

      🌿 That method used for get router param values without query-string from request url-address.

      ⭐ That type of routers always define at the end,
      cause every declared parameter in url-address, it will think its value.

      💞 Best alternative "request.params" for that app.param() method.


      Syntax:  🧬

        app.param("anyName", (request, response, middleware, anyNameV )=>{

          request.paramValue = anyNameV;

          middleware();
        })
        
        app.all("/:anyName", (request, response)=>{ 

          response.send( request.paramValue );

        });


      Example: 📝

        app.param("id",(request,response,next,value)=>{
                         
          request.userInfo = {

            userId : value,
            userName : "Tangilur Rahman"
          };

          next();
        })

        app.get("/user/:id",(request,response)=>{

          response.send(request.userInfo);
        });


        ⭐ app.all("/router/:variable",callBack_Function) & app.param(variable,callBack_Function),

         🌿 Here variable_name must be same, it's work like event (listener & action).
         
         When client define parameter in request url-address that parameter comes to "/:variable" and that variable related app.param()'s callback() function execute as a middleware.

        👉 "next()" is a middleware function, we will learn about it in Middleware Chapter.


      #️⃣ Get multiple parameter values from url-address ✅

      Example:  📝

      ⭕ Procedure 1:

        app.param("id", (req, res, next, value) => {
          req.id = value;
          next();
        });

        app.param("name", (req, res, next, value) => {
          req.name = value;
          next();
        });

        app.get("/api/:id/:name", (req, res) => {
          res.send(req.id + " " + req.name);
        });


      ⭕ Procedure 2: 

        let array = [];

        app.param(["id","name"],(request,response,next,value)=>{

          array.push(value) 
              
          request.userInfo = {
            id : array[0],
            name : array[1]
          };

          next()    
        });

        app.get("/user/:id/:name",(request,response)=>{

          array = [];

          response.send(request.userInfo);    
        });

      👉 One by one parameter comes from url-address and then that app.param()'s callBack() function will be executed.

      🍀 Above procedure 2 Example "app.param()" method will be execute at 2 times.


   
    9. app.route()  📌

      🌿 "app.route()" method used for create chainable route, 
      
      when the route is specified at a single location but need to define multiple HTTP methods. (as like shorthand nothing more )

      👉 Just define common route into "app.route()" method then only define multiple HTTP methods with middleware functions which them want to applied with that route.


      Syntax:  🧬

       app.route("/common/routes")

        .get(middleware,middleware,...)
        .post(middleware,middleware,...)
        ...


      Example:  📝

        app.route("/user")

        .get((request,response)=>{
          response.send("i am get method")
        })

        .put((request,response)=>{
          response.send("i am put method")
        })

        .post((request,response)=>{
          response.send("i am post method")
        })



    10. app.use()  📌

      Note: We already knew about "app.use()" method,
      more clarify at Middleware Chapter. ☢️
  
      

Chapter 8 : Request Object (req)  ✌️

  🌿 "req" object represents the HTTP request.

  ⭐ Express JS's request object inheritance with Node JS's request object and define into some more functionality,
   So that, Node JS request object's all properties & methods work as normal in Express JS.

    #️⃣ request object's all properties in Node JS 👌

      1. request.url
      2. request.method
      3. request.headers
      4. request.on  ( insert data in request.body )
        

  #️⃣ request Object's all pre-define properties In Express JS  ✅

    1. request.baseUrl  📌

      🌿 That property store base route of sub-router. 

      Note: We already knew, we can create multiple sub-route through "express.Router()" method returned object.


      Note:
      
        const app = express();  => It's main router.

        const subRouter = express.Router();  => It's Sub Router.

        
      Example :  📝

        > const express = require("express");

        const app = express(); 

        const admin = express.Router();

        app.use("/admin",admin);


        admin.get("/",(request,response)=>{

          console.log(request.baseUrl);    
          
            👉 "/admin"
        })

        app.get("/",(request,response)=>{

          console.log(request.baseUrl);  
          
            👉 blank [cause it's main router]
        });



    2. request.originalUrl  📌

      🌿 That property as same as like "request.url" (Node JS) property,
        but it's more efficient with sub-router.


      Syntax : 🧬

        ⭕ request.url  => main_router + query

        ⭕ request.originalUrl  => sub_router + main_router + query
        

      Example : With Main Router [ SAME ]  📝

        🍀 url-address => localhost:3000/home?name=Tangil

        > app.get("/home",(req,res)=>{

          log(request.url);   //  /home?name=Tangil

          log(request.originalUrl);  //  /home?name=Tangil

        })


      Example: with sub Router [DIFFERENT]  📝

        🍀 url-address => localhost:3000/admin/dashboard?name=Tangil

        > admin.get("/dashboard",(req,res)=>{

          log(request.url);   //  /dashboard?name=Tangil

          log(request.originalUrl);  //  /admin/dashboard?name=Tangil
        }) 


    3. request.hostname  📌

      👉 url.parse("url-address", true).hostname === request.hostname


      Example:  📝

        app.get("/dashboard",(request,response)=>{

          console.log(url.parse('http://localhost:3000/dashboard',true).hostname);

          console.log(request.hostname); 
        })

      👉 output : localhost


    4. request.path  📌

      👉 url.parse(request.originalUrl, true).pathname  === request.path

      🌿 That both properties store whole path after main router or sub-router without query. 
          

      Example:  📝

        url : localhost:3000/admin/dashboard?name=Tangil

        > admin.get("/",(req,res)=>{

          log(url.parse(request.url,true).pathname);   //  /dashboard

          log(request.path);  // /dashboard

        }) 


    5. request.query  📌

      👉 url.parse(request.originalUrl, true).query === request.query 
      
      Example:  📝

      🍀 url-address =>  http://localhost:3000/admin/dashboard?name=Tangil&age=23
      

       > admin.get("/dashboard",(request,response)=>{

        console.log(url.parse("http://localhost:3000/admin/dashboard?name=Tangil&age=23", true).query);

        console.log(request.query);

        response.send(request.query);
       })

      👉 Output: {name : "Tangil", age : "23"}


    6. request.ip  📌

      🌿 That property store IP Address of that application.

      Example:  📝

        app.get("/",(req,res)=>{
          
          console.log(request.ip);   // 127.0.0.1   
        })


    7. request.protocol  📌

      🌿 Store protocol name ( http or https )

      Example:  📝

        app.get("/",(req,res)=>{
          
          console.log(request.protocol);   // http   
        })


    8. request.params  📌

      🌿 That property is shorthand of "app.param()", 
      return a object.

      👉 That type of routers always define at the end,
       cause every declared parameter in url-address, it will think its value.


      Example: 📝

        url => localhost:3000/admin/dashboard/23/Tangilur

        > admin.get("/dashboard/:id/:name/:...",(request,response)=>{

          console.log(request.params);
          console.log(request.params.id);
          console.log(request.params.name);

          response.send(request.params);       
        })

      👉 Output: { id : "23", name : "Tangilur" };



    9. request.body  📌

      🌿 That property works with 

        1. express.json();
        2. express.raw();
        3. express.text();
        4. express.urlencoded(); 

      middleware, We already knew that how it works.
       


    10. request.cookies  📌

      🌿 That property used for get cookies object from the HTTP Request Headers.

      👉 Same procedure applied that way of sended data insert into "request.body" property.

      ⭐ At first, We need to install a third-party module in our application

        > npm install cookie-parser
       

      Procedure : 🧬

        > const cookieParser = require("cookie-parser");

        > app.use(cookieParser());

        > log(request.cookies);  // whole cookies's object

        > log(request.cookies.cookieName);  // specific cookie's value


      Example:  📝

        const cookies = require("cookie-parser");

        app.use(cookies());

        admin.get("/dashboard",(request,response)=>{

          console.log(request.cookies);

          response.send(request.cookies.auth)       
        });

        
    11. request.signedCookies  📌

      👉 That property used for get encrypted cookies from the HTTP Request Headers.

      [ SAME PROCEDURE ]



    12. request.app  📌

      Note: Through that property we can access "app" object's locals object.

        👉 request.app.locals; 


    13. request.route  📌

      👉 That property store whole information about that route into a object.

      Example : 📝

       app.get("/",(req,res)=>{

        console.log(request.route);
       });



  #️⃣ request object pre-define only one method In Express JS  ✅

    1️⃣ request.get( HTTP Headers Key )  📌

      🌿 This method returns the value of the specific HTTP request headers's key.

      Example: 📝

        app.get("/",(request,response)=>{

          console.log(request.get("connection"));

          response.send(request.get("content-type"))
            
        })


      
Chapter 9 : Response Object (res)  ✌️

  🌿 "res" object represents the HTTP response.

  👉 Express JS response object inheritance with Node JS's response object and define into some more functionality,
   So that, Node JS response object's all properties & methods work as normal in Express JS.


    #️⃣ response object's all properties & methods in Node JS 👌

      1. response.write();
      2. response.end();
      3. response.writeHead();
      4. response.statusCode
        

  #️⃣ response object's all pre-define properties In Express JS  ✅

  
    1. response.app  📌

      👉 Through that property we can access "app" object's locals object.

      ⭐ same as like "request.app"

        👉 response.app.locals; 



    2. response.headersSent  📌

      👉 That property store Boolean value, if

        ⭕ response didn't send  =>  false

        ⭕ response already sended  =>  true


      Syntax:  🧬

        response.headersSent;


      Example :  📝

        app.get("/",(request,response)=>{
    
          console.log(response.headersSent);   // false

          response.send(" i am sending response ")

          console.log(response.headersSent);   // true
        })



  #️⃣ response object's all pre-define methods In Express JS  ✅


    1. response.send()  📌

      👉 "response.send()" as same as like "response.end()",
       but "response.send()" is more efficient.


      🌿 "response.send()" method's parameter can be take Buffer object, String, Object, Boolean or Array.

      Example:  📝

        1. response.send("String");  

        2. response.send([3,6,"Tangilur"]);  

        3. response.send(true);

        4. response.send({

            name : "Tangilur Rahman",
            age : 23,
            address : "Joypurhat"

          })

          ⭐ With Object 

          ⭕ Every object, At first convert to JSON then send response.

          ⭕ Also set {"content-type" : "application/json"} into response headers.


          👉 output: 📝

            {
              "name": "Tangilur Rahman",
              "age": 23,
              "address": "Joypurhat"
            }


    2. response.json();  📌

      👉 "response.json()" as same as like "response.send()",
       but, "response.json(parameter)" === response.send(JSON.stringify( parameter));

      🌿 "response.json()" method's parameter can be take any JSON type, including Object, Array, String, Boolean, Number or null.

      ⭐ And we can also use it to convert other Type to JSON.

     
      Example:  📝

      app.get("/",(request,response)=>{
    
        response.json(null);

        response.json({ user: "tangil" });

        response.status(500).json({ error: "message" });
      })

      
    3. response.sendFile( filePath )  📌

      👉 That method used for send response with any type of file ( html, txt, css, json etc)

      ⭐ Must be define full filePath.


      Example:  📝

      app.get("/",(request,response)=>{

        response.sendFile(path.join(__dirname+"/index.html"));
      })
        

    4. response.redirect( [statusCode], path)  📌

      👉 That method used for redirect any urlPath to another urlPath.

      🌿 That [statusCode] parameter is OPTIONAL,
       If not specified, default statusCode is “302 Found”.


      Example:  📝

        app.get("/",(request,response)=>{
    
          response.redirect("/admin/dashboard")

          response.redirect("http://example.com")

          response.redirect(301, "http://example.com")

          response.redirect("../login")

        })
        

    5. response.location( path )  📌

      🌿 That method used for set Location key into HTTP Response Headers.


      Example:  📝
      
        app.get("/",(request,response)=>{
    
          response.location('/user/3');

          response.location('http://example.com');

        })


    6. response.status( code );  📌

      👉 "response.statusCode = code" === response.status(code)

      🌿 That method only used for set statusCode in Response Headers &
       it's also chainable with res.send() & res.json() methods.

      Syntax : 🧬

        > response.statue( code );

        > response.statue( code ).send("message");

        > response.statue( code ).json("message");


      Example:  📝

        app.get("/",(request,response)=>{
    
          > response.status(300); || response.statusCode = 300;  // set

          > response.json(response.statusCode);   // get

          > res.status(400).send('Bad Request');

          > res.status(404).json('Not Found');
        })

        

    7. response.sendStatus( statusCode );  📌

      👉 response.status(statusCode).send("status message") === response.sendStatus(statusCode);

      Example:  📝

        app.get("/",(request,response)=>{
          
          response.sendStatus(404);

        })
        
        👉 output: Not Found.
  
        

    8. response.cookie( key, value, { object } )  📌

      🌿 That method used for set cookies into HTTP Response Headers.

      👉 must be define key & value,
       The value parameter may be a string or an object converted to JSON.

      👉 In that {Object} parameter, we can define expires, domain, encode etc. [OPTIONAL]

      ⭐ If we don't specified expires's Object then
       created a session cookie.

      Example:  📝

        app.get("/",(request,response)=>{

          response.cookie('rememberMe', '1', { expires: new Date(Date.now() + 900000)});

          response.cookie("name","Tangilur");

        });


    9. response.clearCookie( key )

      🌿 That method used for clear specific cookie by using "key" which already stored into HTTP Response Headers.


      Example:  📝

        app.get("/",(request,response)=>{
 
          response.clearCookie("rememberMe").end();

        })



    10. response.set( key, value );  📌

      🌿 That method used for set HTTP Response Headers field with any key-value pairs.

      Example:  📝

        app.get("/",(request,response)=>{
 
          response.set("Content-Type", "text/plain")

          response.set("name", "Tangilur");

        })
        
         

    11. response.get( HTTP Headers Key )

      🌿 That method return the value of the specific HTTP Response Headers's key.

      👉 same as like "request.get()"

      Example:  📝

        app.get("/",(request,response)=>{

          response.send(response.get("content-type"))
            
          response.send(response.get("name"))
            
        })
     
      
    12. response.download ( filePath )  📌

      👉 That method used for define any type of filePath as an “attachment”,
       typically, browsers will prompt the user for download.


      Example :  📝

        app.get("/",(request,response)=>{
          
          response.download("./report-123.pdf")
  
        })
        


Chapter 10 : Middleware  ✌️

  🌿 Middleware is a normal function which can access to request & response Objects and take a callBack_function. (3 parameters)

  👉 It is those functions which are called between processing the Request and sending the Response in our application.

  👉 Middleware are the functions which work like a door between server's request & response.

    💞 client send request => middleware => request object => response object => output

  ⭐ We can define multiple middleware between server's request & response.

  👉 Every middleware have ability to send response from there or throws ERROR,
   after that next middleware didn't work.

  👉 In Express JS, we can also modify request & response object through middleware.
     
  👉 Middleware also used to initialize request & response objects.

  👉 Middleware is kind of event's action define function which fire with client request.

   So, must be initialize it before call [app.use( middleware ) or sub-router.use( middleware )] 
     
   cause we knew only those event's action will be execute which them already registered.


  #️⃣ A middleware Basic Features ✅

    1. executes any code

    2. can modify request & response Objects

    3. can end request/response cycle  [res.send()]

    4. next() function is used to pass control to the next middleware function 
     
      👉 Function name anything can define. 

    5. throw & catch ERRORS.


  #️⃣ Types of middleware ✅

    1. application-level middleware   [app.use( middleware )]

    2. router-level middleware    [sub-router.use( middleware )]

    3. error-handling middleware 

    4. built-in middleware   [express.json(), express.urlencoded() etc...]

    5. third-party middleware  [cookie-parser  etc...]
  

  
  #️⃣ create application-level middleware  ✅

    🌿 "app.use( middleware )" is a method that used to called application-level middleware,

     & impact into whole application ( request & response object )
     
     & execute that method with every client request.


    Syntax:  🧬

      const funName = (request,response,next)=>{

        // do something with request & response

        next();
      }

      app.use(funName);


    Example:  📝

      const funName  = (req,res,next)=>{

        const reqDetails = (`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl}`);
 
        request.reqDetails = reqDetails;

        next();
      };

      app.use( funName );

    👉 Now, that "request.reqDetails" property we can access from everywhere in our application.


  #️⃣ next()  ✅

    👉 Instead of "next" callBack_Function's name anything we can define.

    🌿 "next()" function simply means that middleware work has been finished then pass control to another middleware.

     So that, it must be declare always at the end as like "return" statement.

    👉 If we don't want to pass control another middleware then no need to declare "next()" function at the end, 
     even no need to declare it at parameter also. [ APPLICABLE ALWAYS ]


    ⭐ We can also throws ERROR by using next(ERROR) function,
     inside next() function write anything, it become an ERROR.
     

    Example:  📝

      app.get("/", (req, res, next) => {

        req.message1 = "one";
        
        next();
      });

      const funName = (req, res, next) => {

        req.message2 = "two";

        next();
      };

      app.get("/", funName, (req, res) => {
        req.message3 = "three";
        
        res.send(req.message1 + " " + req.message2 + " " + req.message3);
      });
    

 
  #️⃣ create router-level middleware  ✅

    🌿 That middleware only applied within specific that sub-router. 

    Example :  📝

      const express = require("express");

      const app = express();

      const subRoute = express.Router();

      const middleware = (req, res, next) =>{
      
        res.variable = "I am router-level middleware";

        next();  
      }

      subRoute.use(middleware);  ✨

      subRoute.get("/",(req,res)=>{

        res.send(res.variable); ✨
      })

      app.use("/sub", subRoute);

      app.listen(3000,()=>console.log("I am running at 3000 port"))
  


  #️⃣ create middleware for specific route  ✅

    👉 That kind of middleware only applied within specific route. 


    Example:  📝

      const middleware1 = (req,res,next)=>{

        console.log("I am middleware 1");
        next();
      }

      const middleware2 = (req,res,next)=>{

          console.log("I am middleware 2");
          next();

      }

      app.get('/', middleware1,middleware2,(req, res) => {
        
        res.send("hello");
      });

      app.listen(3000,()=>console.log("I am running at 3000 port"));

    
    ⭐ We can define multiple middleware into any specific route whatever we want,      
     Just separate them by using comma(,)



  #️⃣ ERROR-handling middleware ✅

    ⭕ Synchronous Error Handler

    🌿 In Express JS, compiler by default can handle any type of synchronous ERROR.

    🌿 Express comes with a built-in ERROR handler that takes care of our any synchronous ERROR that might be encountered in our application. This default ERROR-handling middleware function is added at the end of the middleware function stack.

     If we pass an ERROR inside next(ERROR) function and we can't handle it in a custom own ERROR handler, it will be handled by the built-in ERROR handler.

     The ERROR will be display in the browser with the stack trace (ERROR.message) [development mode]. The stack trace is not included in the production environment.


    🌿 Procedure of throw ERROR 

      next()  => everything is ok.
      
      next("ERROR message");

      throw new Error("ERROR message");

      next(throw new Error("ERROR message"))


    #️⃣ Imagination: Default Error Handler By Express JS  📝

    ⭕ index.js 

      const express = require("express");
      const app = express();

      app.get("/",(request,response,next)=>{

        > throw new Error("something was wrong" );

        > next("something was wrong")

        > next(throw new Error("something was wrong" ));
      });

      .......................
      ....................... 
      ....................... 

      [In Background at the END By Default] 💫

      const defaultErrorHandler = (error,req,res,next)=>{

        res.status(500).send(error);

      }

      app.listen(3000,()=> console.log("server was running"));

    

    #️⃣ If we want, Override Default ERROR handler & Create By Own Handler ✅

      🌿 We can also define own ERROR Handler Middleware, it might be override Default ERROR Handler Middleware.

      ⭐ Remember, Every ERROR Handler Middleware always define at the end in our application.

      ⭐ If we define own ERROR Handler Middleware, even then Default ERROR Handler Middleware also exists after that.


    Syntax:  🧬
      
      app.get("/",(request,response,next)=>{

        > throw new Error("something was wrong");  
        
          👉 attach with ERROR Object

        > next("something was wrong");  
        
          👉 handle by Default ERROR Handler [we can't]

        > next(throw new Error("something was wrong")); 
        
          👉 attach with ERROR Object
      });

      const ownErrorHandler = ( error, request, response, next )=>{

        if(error){
          
          > res.status(500).send(error.message);  
          
            ⭐ for new Error("error-message")

          > res.status(500).send("write any-message"); 
          
            ⭐ for new Error("error-message")

        }else{

          next(error);  ⭐ send that ERROR Default ERROR Handler.
        }
      }


      ⭐ In ownErrorHandler function, must be define 4 parameters whether used or not,    
       It's identifier for Express JS compiler.

      Note: 
      
        ⭕ If throwing Error by using "next("error-message")" then we can't handle it,
          cause "next("error-message")" simply means with that ERROR pass to control next middleware, but didn't attach that ERROR into ERROR Object,
          👉 It only can handle by Default Error Handler.

        ⭕ If throwing ERROR by using "throw new Error("error-message")" then that ERROR will be attach into ERROR Object,
          👉 It could be handle it by using our own Error Handler.


      ⚠️ If statuesCode not specific then it will be 200,
        cause res.send("default 200");


    Example:  📝

      const express = require("express");

      const app = express();

      app.get("/",(request,response,next)=>{
          
        if(true){

          next("I am not attach with ERROR Object")

        }else{

          throw Error("I am attach with ERROR Object")
        }
      })

      const ownErrorHandler = (error, request, response, next) =>{

        > if(error){
            res.status(500).send(error.message)          
          }else{
           next(error);
          }
      }

      app.use(errorHandler);

      app.listen(3000,()=>console.log("i am running at 3000 port"))


    ⭐ Only 1️⃣ own ERROR-handling middleware is enough for whole application.
     & even default ERROR-handling middleware is already there.



  #️⃣ Handle 404 File Not Found ERROR ✅

      🌿 Our own ERROR-handler middleware can't catch directly "404 Not Found ERROR",
       but Default ERROR-handler middleware can catch.
 
      👉 If we want to catch "404 Not Found ERROR" by own then use "app.use()" method.

      ⭐ It's must be define at the end but before our own ERROR-handling middleware.


      Syntax : 🧬 

        app.use(middleware_For_404_Error_Handling );


      Example:  📝

       app.use((req,res,next)=>{

        > res.status(404).send("File Not Found");

        > next("File Not Found");

        > throw new Error("File Not Found");

       })

      👉 From here, If we are throwing ERROR by using {throw Error("error-message")},
       then our own ERROR-handling middleware can catch it. 


  
  ⭕ Asynchronous ERROR Handler
    
    🌿 By Default Express JS can't handle asynchronous item's ERROR,
     so we need to handle them manually.


    Example:  📝

      app.get("/", (req, res, next) => {
  
        fs.readFile("./file_path","utf-8",(error,data)=>{

          if(error){

           next("Read File doesn't exist");
           
          }else{
            response.send(data)
          }

        })
      });


    👉 Now, we can handle that Error by using Default ERROR-handle middleware or own ERROR-handle middleware. 

    ⚠️ If we declare here "throw new Error("error-message")" then our application will be crushed,
      so must be declare "next("error-message")" with asynchronous items for catch ERROR.


    ⭐ When we are throwing ERROR in any way, that ERROR from there directly comes to our own ERROR-handler or Default Error-Handle middleware and execute it.
    between them everything would be skipped.


😎 We already knew about build-in & third-party Middleware 😎



Chapter 11 : Router  ✌️

  #️⃣ main Router  ✅

    👉 const app = express();

     that "app" object get by default all HTTP methods,
     so that, we can create multiple route by using that Object.

    Example:  📝

      app.get(),  app.post(),  app.all() etc...
    

  #️⃣ express.Router();  ✅

    🌿 "express.Router()" method return a object which is a new sub-router. 

    👉 We can create multiple sub-router in our application by using "express.Router()" method.


    Syntax:  🧬

      const express = require("express");

      const app = express();

      const subRouter = express.Router();

      subRouter.httpMethod( "/route, (request,response, [middleware])=> {});

    
    ⭐ Same thing we can also do by using "app.httpMethod()",
     then why should we used sub-router?  ✅

     👉 The main purpose of using sub-router is that we can separate our application into multiple modules
     
      & sub-router doesn't have listen() method so, all sub-router are work at a same port.

      
    #️⃣ add sub-router into main router ✅

      Syntax : 🧬

        app.use("/route", Sub_Router);

    
      ⭕ app.get("/home",(req,res)=>{});

        Mean: When client request at "/home" route & method === "GET" then execute that callBack Function.


      ⭕ app.use("/home",(req,res)=>{});

        Mean: When client request at "/home" route & any HTTP methods then execute that callBack Function.
         

      ⭕ app.use((req,res)=>{});

        Mean: When client request at any router & any HTTP methods then execute that callBack Function.


      ⭕ app.use("/sub",subRouter);

        Mean: When client request at "/sub" then execute that callBack function which is a sub-router. [pass control to sub-router]

        👉 We can add multiple sub-router into a main router.

        
     👉  "/*" means accept any route's name.


    Example: 📝

    ⭕ cat.js  

      const express = require("express");

      const cat = express.Router();

      cat.get("/",(request,response)=>{

        response.send("i am cat home page ");
      })

      cat.get("/about",(request,response)=>{

        response.send("i am cat about page ");
      })

      cat.get("/service",(request,response)=>{

        response.send("i am cat service page ");
      })

      module.exports = cat;


    ⭕ server.js  

      const express = require("express");
      const app = express();

      const dog = require("./router/dog")
      const cat = require("./router/cat")
      const human = require("./router/human")

      app.use("/animal/dog", dog);
      app.use("/animal/cat", cat);
      app.use("/animal/human", human);

      app.get("/",(request,response)=>{

        response.send("<h1>I am Home page 1</h2>")    
      });

      app.use((request,response)=>{

        response.send("<h2> 404 Not Found </h2>");      
      });


      app.listen(3000,()=>console.log("i am running at 3000 port"));


  ⭐ Almost all "app" Object's methods & properties are applicable with every sub-routers. 


😊 END 😊
*/
