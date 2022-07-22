/*

❤️❤️❤️ Learn Node JS ❤️❤️❤️


Chapter 1 : What is Node JS ?  ✌️

  Note: Node JS is a JavaScript runtime built on Chrome's V8 JavaScript Engine.

  Note: JavaScript runtime means inside browser there has a JavaScript engine which take JavaScript file and manipulate loaded DOM & window object through that JavaScript file.

   But Node JS creator take that JavaScript engine ( V8 ) from browser , get permission for access our operation system and create our pc as a server.


  Note: We can say that V8 Engine for Chrome Browser and Node JS for computer or server.
  But procedure almost same.

  Note: Chrome's V8 JavaScript Engine create on C++ programming language.

  Note: Server is a remote computer, nothing more. 

  Note: So, Node JS is a server environment, not a programming language.

  Note: Runs on various platforms. ( windows, Linux, Mac etc)

  Note: Node JS engine have only one threat for accepting client request only and send those requests to pre-define some assistant threats as called Web API ( Non-blocking I/O )  and response them through a callback function by using Event Loop ( Asynchronous ).


  Note: So, Node JS isn't suitable for CPU intensive task ( like huge calculation ) cause V8 engine have only one threat.
  But It's prefer with I/O intensive task cause for those assistant multiple-threats.



  # Why Node.js ?   ✅

    1. Easy to learn.

    2. It uses asynchronous programming; which is different than PHP, ASP , Django etc.

    3. It can help us to create, open, read, write, delete and close files on the server.

    4. used for collecting form data.

    5. Node JS can add delete, modify data in our database.



Chapter 2 :  Node JS Set-up  ✌️

  1. Install Node JS software on pc

    Note: node -v  ( for checking )

  2. https://github.com/learnwithsumit/nodejs-basic-bangla  ( for set-up VS Code editor )



Chapter 3 : Achieve Modules System In Node JS ✌️

  Note: Every " .js " file is a separate module in Node JS. ( Independent )

  Note: Mainly module system used for

    🟢 Easily maintenance our codes

    🟢 re-useable codes

  through export-import procedure.

  Note: In Node JS, there has " global " object instead of " window " object.
  purpose & work almost similar.

  Note: That " global " object also have setTimeout(), setInterval() etc function.

  Note: " global " object haven't more properties like " window " object.


  👉 Vanilla JavaScript haven't module system,
   So to achieve module system Node JS creator used IIFE (Immediately Invoked Function Expression) procedure.

    Syntax :  ( IIFE )  🧬

     ( function() {

        // codes

     }) ();

  
  Syntax :  Module Wrapper Function ( In Background )  🧬

    🟠 Export.js

      > ( function (exports = {} , require, module, __filename, __dirname)){

        // our codes


        // exports.anything; 

        or,
        
        //  module.exports = anything; 


        return module.exports; || return exports;
          
      })();


    🟠 Import.js

      let variable = require(" ./file-path ")

    Note: Just simply call that file's IIFE function through require()  method and get something whatever that module return.

    
  👉 Our codes always  insert by default its own IIFE function automatically.


  # Node JS's IIFE function Parameters ✅
  
    1. __dirname  📌

      Note: That property return current root directory where our file have.

      Example : console.log(__dirname);  📝


    2. __filename  📌

      Note: That property return current root directory + file name.

      Example : console.log(__filename);  📝


    3. exports  📌

      Note: exports is a variable , it have default value empty object {}

      Note: We can export that module's items through initialize that exports object.

      Example:  📝

        const arr = ['tangilur', 'tamim', 3];

        const age = 10;


        > exports.name = "Tangilur Rahman"

        > exports.arr = arr;

        > exports.details = {

            age,...
        }

      👉 finally return that Object.

    
    4. module   📌
 
      Note: Here, module is a Object, which have "exports " property.

      Note: We can export that module's items through initialize that "module.exports" property.

      Syntax :  🧬

        module.exports = anyItem;

      Note: exports & module.exports almost similar, 
      but module.exports property can return only one any item &
       exports object can return multiple items through initialize its object.

      Note: exports  return a object &
       module.exports return a variable( it might be Array , Object , simple variable )

      Note: We can't declare exports & module.exports together at a time in any module cause every file can return one time.

    
    5. require();   📌

      Note: In Node JS we  used " require () " function instead of " import ",
       procedure almost similar.

      Note: We can also used " import " in Node JS but " require " is more efficient and easy for Node JS.

      Note: Just simply call that file's IIFE function through require()  method and get something whatever that module return.

      Example:  📝

        let variable = require( "./filePath" );  // from module.export property

        let object = require( "./filePath" );    // from exports object

        👉 object.exportItem;

        let { variable1 , variable2 ,... } = require("./filePath");

          👉 Object Destructuring

    Note: Every module can decide what Items will be export from that module.


  
Chapter 4 : Type of Modules  ✌️

  # 3 types of modules in Node JS  ✅

    🟢 Local Modules  => own created modules 

    🟢 Built-in Modules =>  Node JS provide modules

      Example : http, url, path, fs,os,events etc.
      
      👉 no need to install anything for used.

    🟢 External modules  ( third party module managed by npm )


  1️⃣ Local Modules  ✅ 

    Note: Local modules created by own.

    👉 We can used it as like function through import-export procedure.

    Note: Local Modules mainly used split our code in multiple modules for

      🟢 Easily maintenance our codes

      🟢 re-useable codes

    through export-import procedure.


  2️⃣  Built-in Modules ✅

    Note: In Node JS environment has some built-in modules for access our operating system, not restrict into browser.

  # Importance some built-in Modules In Node JS ✅

    1. http
    2. https
    3. fs
    4. url
    5. path
    6. os
    7. events and more...

  👉 no need to install anything for used.


  Note: All built-in modules we can import simply declare its module name inside require() method.

    Example :  📝

      let objectName = require( "fs" );

    👉 " ./ " don't use.

  Note: Get that module's all exported-Items in a Object.


  3️⃣ External Modules & package.json ✅

    Note: External modules means third party modules created by someone and  available in internet,
    Just install and use them in our project.

    Note: When we want to use external modules from npm ,
     if our project folder haven't " package.json " file then at first create " package.json " file through " npm init " command prompt,

     but if exist it already then no need to create again.

    Note: Now we can used multiple external modules from npm.

    Note: " package.json " file is the summary for our project, 
     even every external installed modules's dependency  ( "moduleName" : "version") add into " package.json " file.



🟡 Built-In Some Modules 🟡

Chapter 5 : File System Module ( fs ) ✌️

  👉 " fs " module only works with local storage,
   not Database like MongoDB.

  Note: The Node JS file system module allows us to work with the files system on our pc or server.

  Note: To include the File System module, use the require() method.

  Syntax:  🧬

    let file = require('fs');

    👉 Here " file " is Object.


  # Common used with the File System module: ✅

    1. Read files
    2. Create files
    3. Update files
    4. Delete files
    5. Rename files

    
  # fs's Object some importance methods  ✅

    🟠 asynchronously

      1. writeFile();   ( Write )
      2. appendFile();  ( Update )
      3. readFile();    ( Read )
      4. rename();      ( Rename )
      5. unlink();      ( Delete )
      6. exists();      ( Whether exist or Not )


    🟠 synchronously

      1. writeFileSync();   
      2. appendFileSync();
      3. readFileSync();
      4. renameSync();
      5. unlinkSync();
      6. existsSync();

     
    👉 Just add " Sync " keyword after asynchronous method's name then that method convert to synchronous.




😎  Asynchronous File System ( fs ) 😎
    
  👉 Inside every Asynchronous File module's methods must be declare callBack_Function_For_ErrorHandling.

  👉 Inside every Asynchronous File module's methods we can also define { flag : " type "} before define callBack function for that to tell compiler what should it do. 

  Note: Every Asynchronous File module's methods have default " flag " type ,
  if we want to modify them then declare it. [OPTIONAL]


  1️⃣ Writing File ✅

    Note: " writeFile() " is a method of " fs " module, it's help to write content into a file.


    Syntax :  🧬
       
      let { writeFile } = require("fs");

      writeFile ("filePath_with_Extension","content",{flag:"type"},callBack_Function_For_ErrorHandling );


    Example :  📝

      let file = require("fs");

      file.writeFile("./demo.txt","i am demo text 🆗 ", error => {

        if(error){

          console.log(error.message);

        }else{

          console.log("successful");

        }

      });

    
    Note: By default , If the file does not exist then that file will be created,
     but if already exist then use that file.
    If already have contents into that file then fully overlap them.

    Note: We can control it by using { flag : "type" }

    

  2️⃣ Update File ✅

    Note: " appendFile() " is a method of " fs " module, it's help to append contents with its old contents in that file.


    Syntax :  🧬
       
      let { appendFile } = require("fs");

      appendFile ("filePath_with_Extension","content", {flag:"type"},callBack_Function_For_ErrorHandling );


      👉 same as " writeFile() " method.


    Example : 📝

      let file = require("fs");

      file.appendFile("./demo.txt","add me with you 🆗 ", error => {

        if(error){

          console.log(error.message);

        }else{

          console.log("successful");

        }

      });




  3️⃣ Read File ✅

    Note: " readFile() " is a method of " fs " module, it's help to read a file.

    Syntax :  🧬
       
      let { readFile } = require("fs");

      readFile ("filePath_with_Extension", "utf-8" || {flag:"type",encoding:"utf-8"},callBack_Function(error , getData) =>{
            
        if(error){

          console.log(error.message);

        }else{

          console.log(getData);

        }
     });


    Note: If we don't declare " uft-8 " or getData.toString() method then return data as like,
    <Buffer hexadecimal format />


    Example :  📝

      let file = require("fs");

      file.readFile("./demo.txt","utf-8", (error,data) => {
        
        if(error){

          console.log(error.message);
       
        }else{
          console.log(data);
        }
      });

    
    Note: Declare " utf-8 " ,
    Otherwise,  used toString() method.


    Example :  📝

      let file = require("fs");

      file.readFile("./demo.txt", 
      (error,data) => {
        
        if(error){

          console.log(error.message);
       
        }else{
          console.log(data.toString());
        }

      });

    


  4️⃣ Rename File ✅
    
    Note: " rename() " is a method of " fs " module, it's help to rename a file.

    Syntax :  📝
       
      let file = require("fs");

      file.rename ("OldName_filePath_with_Extension","NewName_filePath_with_Extension",callBack_Function_For_ErrorHandling );


    Example:  📝

      let file = require("fs");

      file.rename("./old.js","./new.txt",error =>{

        if(error){

          console.log(error);

        }else{
          console.log("success");

        }
      })


  5️⃣ Delete File  ✅

    Note: " unlink() " is a method of " fs " module, it's help to delete a file.

    Syntax : 🧬
       
      let { unlink } = require("fs");

      unlink ("filePath_with_Extension",callBack_Function_For_ErrorHandling );


    Example: 📝

      let file = require("fs");

      file.unlink("./demo.txt",error =>{

        if(error){

          console.log(error);

        }else{

           console.log("successfully deleted");

        }
      });
    
 

  6️⃣ Check Exist That file or not ✅

    Note: " exists() " is a method of " fs " module, it's help to checking specific file whether exist or not.

    Syntax :  🧬

      let { exists } = require("fs");

      exists ("filePath_with_Extension",callBack_Function_For_Checking );


      👉 That callBack Function return Boolean Value.


      Example:  📝

        let file = require("fs");

        file.exists("./demo.txt",result =>{

          if(result){

            console.log("found");

          }else{

            console.log("not found");

          }
      })

      👉 Here, result contains true or false value.




😎  Synchronous File System ( fs ) 😎

  Note: Just add " Sync " keyword with Asynchronous " fs " module's methods then they are become synchronous " fs " module's methods.

  Note: Inside every Synchronous File module's methods we can define {flag : " type "} before end statement for that to tell compiler what should it do. 

  Note: Every Synchronous File module's methods have default " flag " type ,
  if we want to modify them then declare it. [OPTIONAL] 
  
  👉 As Same like Asynchronous File module's methods. 


  #  Synchronous file module's methods  ✅

    1. writeFileSync();   
    2. appendFileSync();
    3. readFileSync();
    4. renameSync();
    5. unlinkSync();
    6. existsSync();

  Note: With every Synchronous file module's methods no need to declare callBack_Function_For_ErrorHandling, remain things are same as like Asynchronous methods.


  Example:  📝

    let file = require( "fs" );

    1️⃣ file.writeFileSync("demo.txt","contents");

    2️⃣ file.appendFileSync("demo.txt","contents");

    3️⃣ const data = file.readFileSync("demo.txt",{flag:"r+",encoding:"utf-8"});

    4️⃣ file.renameSync("oldName.txt","newName.txt");

    5️⃣ file.unlinkSync("newName.txt");


    👉 We can used try-catch procedure with every Synchronous fs's methods for catching Error, if we want to do it.  [OPTIONAL] 


    Example:  📝
         
      let file = require("fs");

      try {

        file.writeFileSync("demo.txt","i am dummy text",{flag:"wx"})

        } catch (error) {

          console.log(error.message); 

      }


  
Chapter 6 : Operating System ( os ) ✌️

  Note: "os" one of the built-in module in Node JS.

  Note: The "os" module provides information about the pc or server's operating system.

  Syntax :  🧬
    
    let os = require("os");

  
  #️⃣ "os" module some pre-define methods  ✅

    1. userInfo()  📌
     
      👉 Returns information about the current user.

    2. totalmem()  📌

      👉 Returns the number of total memory of the operating-system. [octal format]

    3. freemem()  📌

      👉 Returns the number of free memory of the operating-system.

    4. hostname()  📌

      👉 Returns the hostname of the operating-system

    5. homedir()  📌

      👉 Returns the home-directory of the operating-system

    and more...



Chapter 7 : Path ✌️

  Note: "path" one of the built-in module in Node JS.

  👉 "path" module mainly used with file path.


  Syntax:  🧬

    const path = require("path");

  
  #️⃣ "path" module some pre-define methods  ✅

    1. extname(path_address)  📌

      🌿 Return the file extension of that given path.

      Example:  📝

        let path = require("path");

        console.log(path.extname("index.js"));        
        
        👉 .js


    2. dirname(path_address)  📌

      🌿 Return the directory of that given path.

       Example:  📝

        console.log(path.dirname("user/name/tangilur/file.js"));   
        
        👉 user/name/tangilur


    3. basename(path_address)  📌

      🌿 Return the last part of that given  path.
       
        🍀 fileName with extension.

       Example:  📝
        
        console.log(path.basename("js/tangilur/last-part.js"));     
        
        👉 last-part.js        


    4. join(path_address)  📌

      🌿 Join any specified path with another path.

      Example: 📝

        const joinPath = path.join(__dirname + "/index.js");

        console.log(joinPath);

    👉 ( ./../file  ) means "file" add before one step.

        
    5. parse(path_address)  📌

      🌿 Return a object of that given path.

      Example:  📝

        const path = require("path");

        const pathAddress =  "C:\Users\Tangilur-Rahman\Learn JavaScript/index.js";

        let pathObject = path.parse(pathAddress);

        console.log(pathObject);

       

Chapter 8 : URL ✌️

  Note: "url" one of the built-in module in Node JS, which help to play with url-address. 

  Syntax:  🧬

    const url = require("url");


  URL Address Example :  📝

    🍀 domainName/pageName?key=value&key=value&... 

      Note: 
        
        ? =>  start query string
        
        & =>  add multiple query-parameter

        blank-space =>  %20
    
     
  #️⃣ "url" module's important one method  ✅

    1️⃣ parse(url_address,[OPTION])

      🌿 Return a object of that URL.

      Syntax:  🧬

        const object = url.parse( "url-path", true );
        
        👉 Here "true" means tell that compiler, we want to get query-object also which attach with that url. [OPTIONAL]


      Example: 📝
        
        const url = require("url");

        const urlAddress = "http://localhost:80/user/details?country=Bangladesh&city=Joypurhat";

        const urlObject = url.parse(urlAddress ,true);

      
      ⭕ That UrlObject has Some properties ✅

        1. log(urlObject);   📌  
        
          🌿 That Object stored all information about that url.


        2. log(urlObject.host);   📌 
        
          🌿 Return hostName + portNumber

          👉 localhost:80


        3. log(urlObject.hostname);  📌
        
          🌿 Return only hostName

          👉 localhost


        4. log(urlObject.pathname);  📌 
        
          🌿 Return pathName which have after hostName

          👉 /user/details

        
        5. log(urlObject.search);  📌 
        
          🌿 Return full query-string 

          👉 ?country=Bangladesh&city=Joypurhat


        6. log(urlObject.query);   📌
          
          🌿 Return that query-object

          👉  { country: "Bangladesh", city: "Joypurhat" }
          

        7. log(urlObject.query.city); 📌
        
          👉 Joypurhat



Chapter 9 : Events ✌️

  Note: Every action on a pc or server is an event. Like when a connection is made or a file is opened etc.

  Note: " events " one of the built-in module in Node JS which help to create own multiple events.

  Syntax:  🧬

    let events = require(" events ");

    let event = events.EventEmitter();

    👉 " new " keyword is OPTIONAL in JavaScript when create a object from a class.

  or, 

    let { EventEmitter } = require(" events ");

    👉 Directly get " EventEmitter() " class through Object destructuring.

  Note: That module is little bit different than other Node JS modules.

  Note : " events " module Object's has a class " EventEmitter() " & that class has some methods { emit(), on()  }  which them help to create own event then complete that event.

  Note: We can define multiple " EventEmitter() " class's instance & create multiple own events.

  👉 One " EventEmitter() " instance can create one event.


  # EventEmitter() importance two methods  ✅

    1. emit()  => register a new event
    2. on()    => action for specific registered event


  Syntax: ( create a event )  🧬

    let events = require(" events ");

    let event = new events.EventEmitter();

    event.on( "listener" , function );

    event.emit( "listener",arguments )


  👉 listener anyName we can define.

  Note: We can pass multiple arguments whatever we want,
  passing arguments is OPTIONAL in emit() method.


  Example: ( without parameter ) 📝

    const events = require("events");

    const event = new events.EventEmitter();

    event.on("event1", () =>{

        console.log("i am new event");
    })

    event.emit("event1");



  Example:  ( with parameters )  📝

    const { EventEmitter } = require("events");

    const event = EventEmitter();

    event.on("event1", ({name,address}) =>{

      console.log(`My name : ${name} Address : ${address}`);

    })

    event.emit("event1", {name:"Tangilur",address : "Joypurhat"});


  🟢 Best Practice : When we need to pass multiple arguments then declare them in a object & 
   inside parameter define them in Object destructuring then use them.


  👉 Two importance matters  ⭐

    1. must be event's action " on() " method define before event's register " emit() " method declare.

    2. We can define multiple event's action for one event's register,

    When match event register's listener-name with any event action's listener-name then its event's action ( function ) is executed.


  Note: " EventEmitter() " class Inheritance with other modules as like " fs , http ",
  So, we can define event through those modules object.


    Example:  🧬
    
     request.on()
     request.emit()

     response.on()
     response.emit()

     createReadStream.on()
     createWriteStream.on()

  
  # Event's Action control from another file  ✅ 

    Example: 📝

    🟠 Another.js

      let events = require("events");

      let event =  events.EventEmitter();

      function funName(){

          event.emit("newListener","i am data from another file");
          
      }

      module.exports = {
          event,funName
      };


    🟠 Main.js

      let {event,funName} = require("./file");

      event.on("newListener",(data)=>{

          console.log("The data is : " + data);
      })

      funName();

    
    👉 Into Main.js don't create again " EventEmitter() " class's instance for that event, 
    cause every instance is independent from other instance.


      
Chapter 10 : Build Node JS Own Server ✌️

  # What is Port ? ✅

    Note: A port is a number used to uniquely identify a transaction over a network by specifying both the client and the server. 


    # common some port numbers : ✅

      1.  HTTP  =>   80.
      2.  HTTPS =>   443.
      3.  FTP   =>   21.
      4.  POP3  =>   110.
      5.  FTPS / SSH  => 22. and more...

    Note: Ports number range from 0 - 65535

    Note: port number always attach with IP Address.
     
      👉 192.168.0.1:8080

      Note: 

        IP   => 192.168.0.1
        Port => 8080

    Example : My Home address is uniquely identify by using IP Address, then into my home every family member's name as like port number. 
       

  
  # HTTP Status code ✅
  
    1. Informational Response ( 100-199 )
    2. Successful Response    ( 200-299 )
    3. redirects              ( 300-399 )
    4. Client Errors          ( 400-499 )
    5. Server Errors          ( 500-599 )



  # " http " module ✅

  Note: " http " one of the built-in module in Node JS,
   which help to create  an HTTP server & listen a server port and gives a response back to the client.


  Note: " http " module used for communication between client &  server by using internet.

  Note: The HTTP is stateless, connectedness and can deliver any types of data.

  Syntax :  🧬

    let http = require(" http ");

  
  # " http " module's important one method  ✅
  
    👉 createServer()  📌

      Note: " createServer() " method used to create HTTP Server.

      Note: That method takes a callBack() function as a argument,
      & that callBack() function takes two arguments,
      
        1️⃣ request 

        2️⃣ response 


      Syntax:  🧬

        let http = require( "http" );

        const variable = http.createServer( function( request, response ){

          // communication between client & server

        });

        variable.listen( portNumber,() =>{

          console.log("Server is running");

        });


      Example :  📝

        const http = require("http");

        const port = 8080;
        const host = "127.0.0.1"

        const server = http.createServer((request,response)=>{

        response.write(" i am create ");
            response.end("i am end ");
            
        });
        
        server.listen(port,() =>{

            console.log(`your server is running at this address https://${host}:${port}`);

        });



    # createServer().listen()  ✅

      Note: " listen() " method mainly used for specific port number &
        a callback function for checking server is running or not.

      👉 listen() method 
        
        1️⃣ argument : define PORT Number  [REQUIREMENT]

        2️⃣ argument : callBack function   [OPTIONAL]


      Example:  📝

        > http.createServer((req,res)=>{})
        .listen( 3000, () => log("running"));



  # Importance Some Request's properties  ✅

    👉 Request is a Readable Stream Object.

    1️⃣ request.url   📌

      Note: That property return full pathname & query after Host.

      Example: 📝

        > http://localhost:4000/user?name=tangil&age=23

        
        console.log(request.url);

        output: /user?name=tangil&age=23

      
      🟢 Better to use " url " module to play with HTTP url.


    2️⃣ request.method  📌

      Note: That property return that request object's HTTP method.
      
      Example:  📝

       const method = request.method;
        
      
    3️⃣ request.headers  📌

      Note: That property store HTTP headers object which store information & token about that request.

      Note: headers object also help to checking user's session.

      Note: We can initialize headers object and then send request to server.

      Example : 📝

       request.headers.name = "Tangilur Rahman"

       console.log(request.headers);   // whole object

       console.log(request.headers.name);

       output : Tangilur Rahman


    
    4️⃣ HTTP Body  ✅

      Note: Only HTTP GET method transition data to server through url's query,
      but all other HTTP methods transition data to server through HTTP Body.

      Note: In Node JS, We can't read that HTTP Body's data directly , cause that data come to us way of stream.

      Note: Request Object also has two Stream's pre-register events & through that events we can get HTTP Body's data.

        🟢 request.on("data",(parameter)=>{})

        🟢 request.on("end",()=>{})


      Example :  📝

        request.on("data",(data)=>{

         console.log(data.toString()); 

        });

        request.on("end",()=>{

         console.log("successfully done"); 

        });

      
      👉 Learn more about that in Stream & Buffer chapter.



  # Importance Some Response's properties  ✅

    👉 Response is a Writeable Stream Object.
    
    1️⃣ response.write()  📌

      Note: " response.write() " method help to display response's data which come to server in way of stream.

      Note: We can define multiple " response.write() " method into a server whatever we want.

      Note: Inside " response.write() " method we can pass all content-type's values.


    2️⃣ response.end()  📌

      Note: " response.end() " method used for tell that server " no more need your response you can stop ". 

      Note: If we don't declare " response.end() " method then server don't know when should it stop,
      so browser loading and waiting another response... 

      Note: So must be declare " response.end() " method to stop server.

      Note: We can define only one " response.end() " method at a time in a server &&
      after that nothing is execute as same like " return " statement,
      So, declare it always at the end.

      Note: We can simply define " response.end() " method or  used  that like a last " response.write() " method.

        Example: response.end()  || response.end(" message ")



    3️⃣ response.writeHead()  📌

      👉 " writeHead() " method used for modify Response Headers Object.

      Note: In response from server we will get HTTP Status Code and requested Data.
      
        1. HTTP Header bring HTTP Status code & content-type

        2. HTTP Body bring that requested data.


      Note: We can tell that server which status code what type of content we want to get response from server.

      Note: Basically we can modify HTTP Response Header Object through " writeHead() " method.


      # writeHead() " method take two arguments  ✅  
          
        1. statusCode  📌

          Note: We can define whatever statusCode (100-599) we want.

        2. define content-type object  📌
          
          Note: Default content-type => xml


      Syntax :  🧬

        response.writeHead(200,{"content-type": "text/html"});


      Example:  📝

        const http = require("http");

        const port = 8080;
        const host = "127.0.0.1"

        http.createServer((request,response)=>{

            response.writeHead(205,{"content-type":"text/html"})

            response.write("<h2> Hello </h2>");

            response.write("<h2> It's me </h2>");

            response.end();

        }).listen(port,() =>{

            console.log(`your server is running at this address http://${host}:${port}`);

        });


    
    4. response.statusCode  📌

      Note: That property return only HTTP status code from Response Object.

      Example:  📝

        response.statusCode = 200;

        response.end( response.StatusCode );

        Output: 200 🤣

  

Chapter 11 : HTTP Routing ✌️

  Note: " request.url " return full pathname after hostname.
 
    Example :  🧬
      
      url => localhost:8080/tangil/home.html

        console.log(request.url)

        output: /tangil/home.html


  👉 Better to used " url " module.

    Example: 🧬

      let url = require("url");
      let http = require("http");

      http.createServer((request,response)=>{

      const urlObject = url.parse(request.url,true);

      const pathName = (urlObject.pathname).replace(/^\/+|\/+$/g,"");

      console.log(pathName);

         
      }).listen(4000,() =>{
        console.log("server is running at 4000")
      })
  

  Example :  ( Routing For Read HTML Files from local storage )  📝

    let http = require("http");
    let fs = require("fs");

    http.createServer((request,response) =>{

      let responseHandle = (fileLocation,statusCode) =>{

        fs.readFile(fileLocation,"utf-8",(error,data) =>{

          if(error){

            response.writeHead(404,{"content-type":"text/plain"});
            
            response.write("something was wrong at " + fileLocation);

              response.end();

          }else{

            response.writeHead(statusCode,{"content-type":"text/html"});
            response.write(data);
            response.end();

          }
        });
    }

      if(request.url === "/"){

          responseHandle("./HTML/hme.html",200);

      }else if (request.url === "/about"){

          responseHandle("./HTML/about.html",200);

      }else if (request.url === "/service"){

          responseHandle("./HTML/service.html",200);

      }else{
          responseHandle("./HTML/error.html",404);
      }
            
    }).listen(80,()=>{
        console.log("server running");
    });




Chapter 12 : Stream & Buffer  ✌️

  # Stream  ✅

    👉 Stream means continuously flow something like ঝর্ণা

      Example: watching youtube videos, movies stream, live sports stream etc.

    Note : We aren't download cricket match then watch ,
    rather continuously data come to our device and we watch.

    Note: Same concept apply in Node JS.
    Streams are object that let us read data from a source file & write data to a destination file through part by part continuously.

    
    # In Node JS, there are mainly two types of streams  ✅

      1. Readable  =>  That Stream used for read operation.

      2. Writable  =>  That Stream used for write operation.


    
    #  Stream with pre-register event ✅
  
    Note: Stream is an EventEmitter() class's instance which throws several pre-register events.


    Note: Two main pre-register events's listener are, 

      ⭐ emit() method already define in Node JS Compiler, just we need to define on() method.

      1. data  📌

        Note: This event is fired when there is data available to read.

        👉 take an argument.


      2. end   📌

        Note: This event is fired when there is no more data to read.

        👉 take no argument.

     
      Note: Those two pre-registered events apply with every Streams,
       we just need to define those event's action what do we want,
       called those events automatically by complier When the time comes.

      👉 event's listener name is fixed , we can't change.


      
  # Buffer  ✅

    Note: It is a group of parts in Streams.

    Note: We can't work with these parts but we will work with Buffer 
     & every Buffer will output.

    

  # Readable & Writeable Streams With " fs " module  ✅


    Note: " fs " module have also two methods,

      1. fs.createReadStream()  📌

      2. fs.createWriteStream() 📌

    for create Readable & Writeable Stream.


    Note: " fs " module's that two methods { readFile() & writeFile() }  aren't support Stream.


  # createReadStream()  ✅

    Syntax:  🧬

      const variable = fs.createReadStream( " fileName.extension" , "utf-8");

      variable.on( "data" , (anyName) =>{

        console.log(anyName);

      });


      variable.on( "end" , () =>{

        console.log(" successful message");

      });


    Example :  📝

      const fs = require("fs");

      const ourReadStream = fs.createReadStream(`${__dirname}/Text/bigData.txt`,"utf-8");

      ourReadStream.on("data",(any)=>{

          console.log(any);
          
      });

      ourReadStream.on("end",()=>{

          console.log("successfully done");
          
      });


    
  # createWriteStream()  ✅

    Syntax:  🧬

      const variable = fs.createWriteStream( " fileName.extension");
       
      variable.write( readStreamChunk );


    👉 createWriteStream() method always work with a createReadStream() method.

      Note: " write() " method used for write readStreamChunk to the destination file. 
       same purpose used it with response object { response.write() }
      
        Example: response.write("something");


    Example :  📝

      const fs = require("fs");

      const ourReadStream = fs.createReadStream(`${__dirname}/Text/bigData.txt`,"utf-8");

      const ourWriteStream = fs.createWriteStream(`${__dirname}/Text/output.txt`);


      ourReadStream.on("data",(anyName)=>{

          ourWriteStream.write( anyName );
          
      });


  # Readable & Writeable Streams With " http " module  ✅

    Note: By Default, In Server

      🟢 request  Object   =>  Readable  Stream

      🟢 response Object   =>  Writeable Stream

    👉 With " http " module, main purpose of used stream is,

      1️⃣ store sended data in a variable

      2️⃣ response that data to client
      
      in way of stream.


    Example :  📝

    > const http = require("http");

      const server = http.createServer((request,response) =>{

        if(request.url === "/"){

          response.writeHead(202,{"content-type":"text/html"});

          response.write(`<html> <head> <title>Stream Data</title> </head> <body> <form action="/getData" method="POST"> <input type="text" name="text"/> <input type="password" name="password"/> <input type="number" name="number"/> <input type="submit" value="Submit"/> </form> </body></html>`);

            response.end();

        } else if(request.url === "/getData" && request.method === "POST"){

          let arr = [];

          request.on("data",(chunk)=>{

            arr.push(chunk)

              console.log(chunk.toString());

          })

          request.on("end",()=>{

            response.write(arr.toString());

            response.write("Thanks for submitted ")

            response.end();

          })
              
        }
    });

    server.listen(4000,()=>{

      console.log("server running at 4000");

    });



  # pipe()  ✅

    Note: pipe() method feeds a Readable Stream into a Writable Stream. 😎

    Note: It's the shorthand to complete Readable & Writeable Stream.

    
    Syntax:  🧬

      ourReadStream.pipe(ourWriteStream);


    Example: ( with " fs " module )   📝

      const fs = require("fs");

      const ourReadStream = fs.createReadStream(`${__dirname}/Text/bigData.txt`,"utf-8");

      const ourWriteStream = fs.createWriteStream(`${__dirname}/Text/newFile.txt`);

      ourReadStream.pipe(ourWriteStream);


    Example:  ( With " http " module )  📝

      const http = require("http");

      const server = http.createServer((request,response) =>{

        if(request.url === "/"){

          response.writeHead(202,{"content-type":"text/html"});

          response.write(`<html> <head> <title>Stream Data</title> </head> <body> <form action="/getData" method="POST"> <input type="text" name="text"/> <input type="password" name="password"/> <input type="number" name="number"/> <input type="submit" value="Submit"/> </form> </body></html>`);

          response.end();

        }else if(request.url === "/getData" && request.method === "POST"){

          response.write(" hello world ");

          request.pipe(response)
              
        }
      })
      server.listen(4000,()=>{

        console.log("server running at 4000");

      });

   
    👉 In a server " request.pipe(response) " declare always at last line,
     cause ( In Background )

      > request.pipe(response,{
        end : true
      })

    means include response.end() also;



    Example : stream with ( fs + http modules )  📝

      const http = require("http");
      
      const fs = require("fs");

      const server = http.createServer((request,response) =>{

          const myReadStream = fs.createReadStream(`${__dirname}/Text/bigData.txt`,"utf-8");

          myReadStream.pipe(response);

      });

      server.listen(4000,()=> log("server is running at port 4000"));




Chapter 13 : Get single Quote from a text file  ( project ) 🎗️ 


  🟠 index.js  ✅

    const math = require("./Lib/Math")
    const quote = require ("./Lib/Quote");

    const getSingleQuery = () =>{

        const getArray = quote();

        const getArrayLength = getArray.length;

        const getRandomNumber = math(1,getArrayLength);

        const getQuery = getArray[getRandomNumber-1];

        console.log(getQuery);
    }

    setInterval(getSingleQuery,2000);


  🟠 Math.js  ✅

    const randomNumGenerator = (min, max)  => Math.floor(Math.random() * (max - min + 1) + min);
  
    module.exports = randomNumGenerator;

  
  🟠 Quote.js  ✅

    const fs = require("fs");

    const getAllQuote = () => {

        const string = fs.readFileSync(`${__dirname}/quote.txt`,"utf-8");

        const array = string.split("\r\n");

        return array;
        
    }

    module.exports = getAllQuote;


  👉 We can't export asynchronous items, Just used them into that file.
   cause, " module.exports " must be declare at the last line & it will be already executed.



Chapter 14 : Row Node JS Project  🎗️

  Link : https://github.com/Tangilur-Rahman/raw-node-js-project

    

*/
