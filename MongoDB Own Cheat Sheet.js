/*
❤️❤️❤️ MongoDB & Mongoose ❤️❤️❤️

Chapter 1 : What is Database ?  ✌️

  🌿 Databases are used for storing, maintaining and accessing any sort of data.


  #️⃣ Types of DataBase  ✅

    1. Relational Database Management System ( RDBMS )   📌

      👉 That Database used SQL command.

      Example: MySQL, PostgreSQL, Oracle Database etc.


    2. Non Relational Database Management System   📌

      👉 That Database used NoSQL command.

      Example: MongoDB etc.


  #️⃣ different between RDBMS VS MongoDB  ✅

    RDBMS : multiple related tables combination built a RDBMS Database.

    MongoBD : Each document specifically store only one thing information. 


    RDBMS    =>   MongoDB

    table    =>   collection

    row      =>   document

    column   =>   field


    👉 Database => collection  => document => field   [MongoDB]

    Note: MongoDB's Data storing format as same as like JSON,
     but called it BSON cause in Binary format storing Data.


  Note: We can use RDBMS with Node JS or Express JS,  
   but prefer to use MongoDB cause MongoDB's NoSQL syntax are similar to JSON & easy to maintain.



Chapter 2 : Setup MongoDB on localhost  ✌️

  👉 For localhost, At first need to install MongoDB software on our PC,
   then attach that "bin" folder in "System Environment Variables".

  👉 By Default in localhost, MongoDB's all Data storing in "data" folder where we already installed mongoDB software, but we can change it.
  
    mySetUP =>  C:\Database\mongodb\data  


  ⭐ Start mongoDB's server on localhost by using CMD

    > mongo


Chapter 3 : CRUD Operation in MongoDB  ✌️

  #️⃣ Basic CRUD Commands  ✅

    1. Show All Databases  📌

      > show dbs;


    2. Create New Database or Switch Any Exist Database  📌

      > use database_name;


    3. Show Current Database  📌

      > db;

    4. Show current Database's All Collections  📌

      > show collections;



  ⭕ CREATE 

    Syntax :  🧬

      🌿 insertOne({document}) ❗ insertMany([documentsArray])

      👉 No Need to define Condition inside those methods.

    5. create a new collection with insert one document  📌

      > db.collection.insertOne({document});

      👉 We can insert one Object or JSON,
       If we inserted Object then convert it to JSON format then stored.


      ⭐ No need to create collection separately, Just declare collection-name with insertOne() or insertMany() methods,

       automatically created collection with that collection-name in Database
      or, if already exists then used that collection.


      👉 With every documents, MongoDB attach a universal unique "_id" by default.



    6. Create a new collection with insert many documents  📌

      > db.collection.insertMany([documentsArray]);

      👉 We can insert a Array which have documents of collection.



  ⭕ READ

    Syntax :  🧬

     🌿 findOne({conditionForFind}) ❗ find({conditionForFind}) 
      
    👉 Inside "findOne() & find()" methods, we can define conditions's Object [OPTIONAL].

    ⚠️  If we don't want to get all documents, then define condition must.


    7. When want to get one document from collection  📌

      > db.collection.findOne({conditions});

      👉 return a JSON.

      👉 If that condition was matching with multiple documents,
       even return only one 1st matched document. [cause findOne()]


    8. When want to get multiple documents from collection  📌

      > db.collection.find({conditions});

      👉 return a Array which store all of them documents that matched with the condition.

      👉 When we want to get all documents from that collection, 
       NO NEED to define any condition.


    9. If we want to control showing fields  📌

      > db.collection.findOne({condition}, {"key" : 0 || 1,...});

      > db.collection.find({condition}, {"key" : 0 || 1,...});

      Note: 
      
        🍀 0 means don't display

        🍀 1 means display   [ DEFAULT ]

      👉 We can define multiple field's keys.

      👉 Condition must be define, even haven't any condition then declare => {},
       cause it must be define at 2nd parameter.

        ⚠️ condition = {} => for select all documents.
      

  ⭐ "pretty() & limit() & skip()" methods only work with "db.collection.find()" method 


    10. displaying a collection's documents through pretty format  📌

      > db.collection.find({conditions}).pretty()

      👉 "pretty()" method just used for displaying documents in pretty format,
        nothing else.    


    11. If we want to display limited documents from multiple documents  📌

      > db.collection.find({conditions}).pretty().limit(number)

      👉 pretty() OPTIONAL but find() must be define.


    12. If we want to display documents through skipping some documents  📌

      > db.collection.find().limit(number).pretty().skip(number)

      👉 limit() & pretty() OPTIONAL but find() must be define.



  ⭕ UPDATE

    Syntax : 🧬

     🌿 updateOne({conditions, update}) ❗ updateMany({conditions, update}) 

     👉 condition must be define inside those methods.


    13. When want to update one document  📌

       > db.collection.updateOne({conditionForFind}, { $set:{ key:"value",... }});

       1️⃣ Parameter:  {conditionForFind},

       2️⃣ Parameter:  { $set: { updateObject } }


       Example:  📝
       
        > db.users.updateOne({"name":"Tangilur"},{ $set : { age: "23", "address" : "joypurhat"}})


      ⭐ condition must be define, even haven't any condition then declare => {},
       cause "{ $set : {} }" must be define at 2nd parameter.

        ⚠️ condition = {} => select all documents.


      👉 If that condition was matching with multiple documents,
       even update only one 1st matched document. [cause updateOne()]


    14. When want to update multiple documents  📌

      > db.collection.updateMany({conditionForFind}, { $set:{ key:"value",... }});
  
      Example:  📝 
      
        db.users.updateMany({},{ $set : { "age":"23", address : "joypurhat" }});


  ⭕ DELETE

    Syntax :  🧬

     🌿 deleteOne({conditionForFind}) ❗ deleteMany({conditionForFind}) 

     👉 condition must be define inside those methods.


    15. When want to delete one document  📌

      > db.collection.deleteOne( {conditionForFind} )

      👉 If that condition was matching with multiple document,
       even delete only one 1st matched document. [cause deleteOne()]


    16. When want to delete multiple documents  📌

      > db.collection.deleteMany({conditionForFind});

      Example: db.collection.deleteMany({"name": "Tangil"});



  #️⃣ Summary   ✅

    ⭕ Create => db.collection.insertOne({}) ❗ .insertMany( [{},...] );

    ⭕ Read   => db.collection.findOne({conditionForFind}, {"keys" : 0 || 1} )  ❗

                 .find({conditionForFind}, {"keys" : 0 || 1}).limit(n),skip(n).pretty();

    ⭕ Update => db.collection.updateOne({conditionForFind},{ $set : { ... } })  ❗

                .updateMany({conditionForFind},{ $set : { ... } })

    ⭕ Delete => db.collection.deleteOne({conditionForFind})  ❗

                 .deleteMany({conditionForFind});

       
    👉 Define Conditions Into function 

      ⭕ Create  => No Need

      ⭕ Read    => Optional  [If Don't Want Select All Documents]

      ⭕ Update  => Must Be

      ⭕ Delete  => Must Be
     



Chapter 4 : mongoose  ✌️

  #️⃣ What is mongoose?  ✅

    🌿 Elegant Object Data Modeling for Express JS.

    👉 Imagination each document is like a Javascript's Object.


  #️⃣ How to connect Node JS with MongoDB through mongoose  ✅

    > Node JS => mongoose => mongo driver => mongoDB => Node JS


  #️⃣ Benefits fo using mongoose  ✅

    1. Abstraction from raw low level MongoDB.

      👉 give us pre-built some plugin.

    2. Relation between multiple NoSQL Databases.

    3. Provides Schema Validation.

      👉 mongoose.Schema({});

    4. Object-Data Mapping 

      👉 mongoose.model(collectionName, Schema);

      Note: Translation of data into object that our code is more understandable.

    5. ~40-60% write less code compared to raw MongoDB package.



  #️⃣ install mongoose in our application  ✅

    > npm install mongoose

    > const mongoose = require("mongoose");

      👉 Return an Object, that Object_Name anything we can define.


  #️⃣ Connect localhost Database in our Application through mongoose  ✅ 

    Syntax:  🧬

      const mongoose = require("mongoose");

      🎯 mongoose.connect("mongodb://localhost:27017/DatabaseName")
       .then(() => console.log("successfully connected"))
       .catch((error) => console.log(error.message));

      or,

      🎯 (async()=>{

          try {

            await mongoose.connect(database_url);
            console.log("successfully connected");  

          } catch (error) {
            console.log(error.message);
          } 

          })();
      

    🌿 "mongoose.connect()" method return a promise,
     we can handle it by using,

      🎯 then & catch

      🎯 async & await

    doesn't even matter,
     it's just for used checking connection establish successfully or not.


    ⭐ If exist that Database then used it,
     otherwise create that Database in MongoDB collection.



  #️⃣ create a Schema  ✅

    🌿 Schema means a structure of database which also help to validation when inserting data in database.
    

    Syntax :  🧬

      const mongoose = require("mongoose");

      const createSchema = mongoose.Schema({object});


    Example: 📝

      const mongoose = require("mongoose");

      const todoSchema = mongoose.Schema({

        title : {
          type : String,
          required : true,
          unique : true
        },

        description : String,

        status : {
          type : String,
          enum : ["active","inactive"]
        },

        date : {
          type : Date,
          default : Date.now()
        }

      },
        { timestamps: true }
      );

      module.exports = todoSchema;


    Procedure : ✅ 

      1️⃣ "mongoose.Schema()" method take a Object as a parameter.  📌

      2️⃣ We can define validation requirement into that Object for each key.  📌

      3️⃣ If we need to define only "type" as a validator then we can define it directly as like normal value.  📌


        Example:  📝

          mongoose.Schema({

            name : String,
            age : Number ,
            marriage: Boolean,
            children : Array,
            Data : Date 

          });
          
        Note: List of Types ✅

          1. String
          2. Number
          3. Boolean
          4. Date
          5. Array
          6. ObjectId [ _id ] etc...


      4️⃣ If we need to define multiple validator requirement for a single key then create nested object
       & into that nested object can declare multiple validator in "key : value" pairs.  📌


        Example:  📝

          mongoose.Schema({

            title : {
              type : String,
              required: true        
            }
          })

               
      #️⃣ some validators in mongoose  ✅

        1️⃣ type : String ❗ Number ❗ Boolean ❗ Date ...

          🌿 type : String

            ⭕ lowercase : true ❗ false  [Default => false] 

              👉 called toLowerCase() function

            ⭕ uppercase : true ❗ false  [Default => false] 

              👉 called toUpperCase() function

            ⭕ trim : true ❗ false  [Default => false] 

              👉 called trim() function

            ⭕ minLength : number ❗ [number, "ERROR-message"]

              👉 set minimum length

            ⭕ maxLength : number ❗ [number, "ERROR-message"]

              👉 set maximum length

            ⭕ enum : ["accept", "only", "those", "values"] ❗ 

                enum : {
                  values: ["Coffee", "Tea"],
                  message: "{VALUE} is not supported"
                }
              


          🌿 type : Number

            ⭕ min : number ❗ [number, "ERROR-message"]

              👉 set minimum number

            ⭕ max : number ❗ [number, "ERROR-message"]

              👉 set maximum number


          🌿 type : Date

            ⭕ min : number ❗ [number, "ERROR-message"]

              👉 set minimum Date

            ⭕ max : number ❗ [number, "ERROR-message"]

              👉 set maximum Date
              

        2️⃣ required : true ❗ false ❗ [Boolean, "ERROR-message"] 
        
          👉 Default => false 


        3️⃣ default : "set default value if user not define any value then apply"

        4️⃣ unique : true ❗ false   
        
          👉 Default => false 

          
        5️⃣ Create Custom Validate

          Syntax : 🧬

            validate(value){
              if(condition){
                throw Error("ERROR-message")
              }
            }

          👉 Our inputted value is an argument of that validate() function.


          Example: 📝
            
            validate(value){
              if(value > 20){
                throw Error("Not Maximum 20 Letter")
              }
            }

        ⭐ Used 3rd party library for Advance validation

          👉 Both server & client-side, we can used that library.

          🌿 install 

            > npm install validator

            > const validator = require("validator");

            👉 return an Object which has multiple methods those methods return Boolean Value.


          ⭕ Server-side [with Schema]

          Example :  1️⃣ 📝

            email : {
              type : String,
              required : true,
              validate(value){

                if(!validator.isEmail(value)){
                  throw new Error("Invalid Email")
                }
              }
            }


          Example : 2️⃣ 📝

            phone : {
              type : String,
              required : true,
              validate(value){
                if(!validator.isMobilePhone(value,["bn-BD"])){
                  throw new Error("invalid phone number")
                }
              }
            }

        👉 Except those methods,
         validator Object has more methods, check Official website.



      5️⃣ If we need to attach MongoDB's unique "_id" separately with specific key
       then just simply declare that Key object into an Array 📌 

        Syntax : 🧬

          mongoose.Schema({

            ArrayName : [{

              key : {},
              ...
            }]
          });
      
      👉 Initialization : document.key = [].concat({object},...)
   

      6️⃣ {timestamps: true}

        🌿 Mongoose Schema have a "timestamps" Object that tells MongoDB to attach createdAt and updatedAt properties into our documents automatically. 

        👉 It's the 2nd parameter of mongoose.Schema() method.

        👉 Default: {timestamps: false}



  #️⃣ create a mongoose model  ✅

    🌿 A mongoose model is a wrapper on the mongoose-schema,
     & provides an interface for creating, reading, updating, deleting documents in our database.


    👉 The "mongoose.model()" method is used for create a model object which help to create a collection of a particular database of MongoDB with Schema's Validation. 
        

    👉 The name of the collection created by the model function,
     
      🍀 our given collection-name (as a parameter) convert to lowercase and put "s" in the end.     
 
      ✒️ TanGil  => tangils


    Syntax:  🧬

      const model = mongoose.model("collection_name", collection_schema);

      👉 return an Object.


    #️⃣ Explain of mongoose.model()'s parameters ✅
    
      🌿 This function accepts two parameters:

       1️⃣ collection_name => It is the name of the collection.

        ✒️ Tangil  => tangils

       2️⃣ collection_schema => It is the Schema of the collection for validation.


    Example :  📝

     🎯 todoModel.js 

      > const mongoose = require("mongoose");

      require("dotenv").config();

      mongoose.connect(process.env.mongoDB_Url)
      .then(()=>console.log("connection successfully"))
      .catch(error => console.log(error.message));


      const todoSchema = mongoose.Schema({

        title: {
          type: String,
          required: true,
          unique : true
        },

        description: String,

        status: {
          type: String,
          enum: ['active', 'inactive'],
        },

        date: {
          type: Date,
          default: Date.now(),
        },
      });

      const model = mongoose.model("Todo",todoSchema);

      module.exports = model;
      


Chapter 5 : CRUD in mongoose  ✌️

  👉 In mongoose, we can do the CRUD operation by using "mongoose.model()" returned object.

  👉 Syntax almost similar with MongoDB but that mongoose's model object return a promise for working asynchronously.

  👉 we can handle that promise by using

    🎯 then & catch

    🎯 async & await ⭐

    doesn't even matter


  ⭕ Create 

  #️⃣ When want to insert one document into mongoDB database  ✅

    Note: "insertOne()" method isn't available in mongoose. So 😔


    Syntax:  🧬

    🎯 model(oneDocument).save(error_handler_Function);

    or, 

    🎯 const document = model(oneDocument);
      
        👉 here attach mongoDB's unique "_id"

      document.save(error_handler_Function);


    Example: 📝

      const model = mongoose.model("TODO",Schema)

      app.post("/", async(req,res)=>{

        const document = await model(req.body);
      or,
        const document = await model();

        document.name = req.body.name;
        document.age = req.body.age;
        ...


        document.save(error=>{

          if(error){
            res.sendStatus(400)
          }else{
            res.sendStatus(200);
          }
        })
      });
        

    👉 That "model({})" method return an object which store given object's data,
     here into that object also attach mongoDB's unique "_id" BY DEFAULT.

    👉 "save()" method used for save that document's object into MongoDB,
     it's take also one callBack() function which just for checking.

    👉 That "save(error_handler_Function)" only used when we are ready to insert one document in mongoDB.

    ⭐ That method only used when want to insert one document into mongoDB.



  #️⃣ When want to insert multiple documents into mongoDB database  ✅

    🌿 Syntax almost similar to mongoDB's syntax,
     but just return a promise for conforming & also can get those documents.


    Syntax:  🧬

    🎯 model.insertMany( arrayDocuments )
     .then( result )
     .catch( error );
    
    or, 

    🎯 async(req, res) => {

        try{

          await model.insertMany( arrayDocument );

          res.send("Register Successfully");

        }catch(error){}
      }

    👉 ".then(result) ❗ await" return that inserted document's Array. 


    Example:  📝

      app.post('/', async (req, res) => {

        try {

          await model.insertMany(req.body);
          res.send("Register Successfully");
              
        } catch (error) {      
          res.send(error.message)
        }
      });



  ⭕ Update 

  #️⃣ When want to update one document into mongoDB database ✅

    Note: Syntax almost similar to mongoDB's syntax,
     but just return a promise for conforming message.

    Syntax:  🧬

    🎯 model.updateOne({conditionForFind}, { $set : {} })
     .then(message)
     .catch(error);

    or,

    🎯 async(req, res) => {

        try{

          await model.updateOne({conditionForFind},{ $set : {} });
          
        }catch(error){}
      }

    👉 ".then(message) ❗ await" return conforming message.


    Example: 📝

      todos.put("/:title", async(req,res)=>{

        try{

          await model.updateOne({title: req.params.title},{
            $set : {
              description : "Hi, everyone!"
            }
          })

          res.send("One Document update successfully")

        }catch(error){
          res.send(error.message);
        }
      });



  #️⃣ When want to update multiple documents into mongoDB database ✅

    👉 That procedure as same as like "model.updateOne()" method.

    Syntax:  🧬

    🎯 model.updateMany({conditionForFind}, { $set : {} })
      .then(result)
      .catch(error);

    or,

    🎯 async(req, res) => {

        try{

          await model.updateMany({conditionForFind}, { $set : {} });
          
        }catch(error){}
      }

    👉 ".then( message ) ❗ await" return conforming message.


    Example: 📝

      todos.put("/:title", async(req,res)=>{

        try{

          await model.updateMany({title: req.params.title},{
            $set : {
                description : "Hi, everyone!"
            }
          })

          res.send("Multiple Documents update successfully")

        }catch(error){
          res.send(error.message);
        }
      });


  ⭕ Read 

    #️⃣ When want to get one document from mongoDB database  ✅

      🌿 Syntax almost similar to mongoDB's syntax,
       but just get that document into promise.

      Syntax:  🧬

      🎯 model.findOne({conditionForFind}, {key : 0 | 1 });
        .then(result)
        .catch(error)

      or,

      🎯 async (req, res) => {

          try{

            const document = await model.findOne({conditionForFind}, {key : 0 | 1 } );

            res.send(document);

          }catch(error){}
        }

      👉 ".then(result) ❗ await" return expected a JSON document.
      

      Example:  📝

        app.get('/', async(req, res) => {

          try {

            const document = await model.findOne({name: "Tangilur Rahman"});

            res.send(document)

          } catch (error) {
            res.send(error.message)
          }
        });


    #️⃣ When want to get multiple documents from mongoDB database  ✅

      🌿 Syntax almost similar to mongoDB's syntax,
       but just get that documents of array into promise.

      Syntax:  🧬

      🎯 model.find({conditionForFind}, {key : 0 | 1 }).limit(n).skip(n)
        .then(result)
        .catch(error)
  
      or,

      🎯 async(req, res) => {

          try{

            const documents = await model.find({conditionForFind}, {key : 0 | 1 }).limit(n).skip(n);

            res.send(documents);

          }catch(error){}
        }

      👉 ".then(result) ❗ await" return expected a documents of array.
      
      👉 Base on condition we will get multiple documents whatever we want.

      👉 limit(), skip() methods are OPTIONAL.

      👉 If we don't define condition then we will get that collection's all documents.


      Example:  📝

        app.get('/', async(req, res) => {

          try {

            const arrayDocu = await model.find({name : "Bangladesh"}, { _id : 0}).limit(1).skip(2);

            res.send(arrayDocu);

          } catch (error) {
            res.send(error.message)
          }
        });



  ⭕ Delete 

    #️⃣ When want to delete one document from mongoDB database ✅

    🌿 Syntax almost similar to mongoDB's syntax,
     but just return a promise for conforming message.

    Syntax: 🧬

    🎯 model.deleteOne({conditionForFind})
      .then(message)
      .catch(error);

    or,

    🎯 async (req, res) => {

        try{

          await model.deleteOne( {conditionForFind} );
              
        }catch(error){}
      }

    👉 ".then(message) ❗ await" return conforming message.


    Example : 📝

      app.delete('/', async(req, res) => {

        try {
            await model.deleteOne({name : "china"});
            res.send("delete successfully")
        } catch (error) {
            
          res.send(error.message)
        }
      });


  #️⃣ When want to delete multiple documents from MongoDB database ✅

    👉 That procedure as same as like "deleteOne()" method.

    Syntax: 🧬

    🎯 model.deleteMany( {conditionForFind} )
      .then(message)
      .catch(error);

    or,

    🎯 async (req, res) => {

        try{

          await model.deleteMany({conditionForFind});
            
        }catch(error){}
      }

    👉 ".then(message) ❗ await" return conforming message.


    Example : 📝

      app.delete('/', async (req, res) => {

        try {
            await model.deleteMany( {name : "Tangil"});
            res.send("deletes successfully")

        } catch (error) {
            
          res.send(error.message)
        }
      });



  🌿 Summary 

    ⭕ Set-up mongoose

    1️⃣ At first connect mongoDB's database through mongoose in our application. 📌

      > const mongoose = require("mongoose");

        mongoose.connect(mongodb://localhost:27017/DatabaseName)
        .then(message)
        .catch( error );


    2️⃣ Then create schema for database's structure & validation of inputting data  📌

      > const schema = mongoose.Schema({ key : validator })


    3️⃣ Then create model for operation CRUD in a collection with schema validation

      > const model = mongoose.model(collection_name, schema );


    ⭕ CRUD Operation
 
    4️⃣ Create document(s)  📌

      🎯 One document create

        > await model(oneDocument).save(error_handler_function);


      🎯 Multiple documents create at a time

        > await model.insertMany(arrayDocument);
          


    5️⃣ Read document(s)  📌

      🎯 One document read

        > await model.findOne({conditionForFind}, { selection });


      🎯 Multiple document read
      
        > await model.find({conditionForFind}, { selection }).limit(number).skip(number);
      

    6️⃣ Update document(s) 📌

      🎯 one document update

        > await model.updateOne({conditionForFind}, { $set : {...} } );
         
        
      🎯 Multiple documents update at a time 

        > await model.updateMany({conditionForFind}, { $set : {...} });      


    7. Delete document(s)  📌

      🎯 one document delete

        > await model.deleteOne({conditionForFind});
          

      🎯 multiple documents delete at a time 

        > await model.deleteMany({conditionForFind});
      

    #️⃣ What could we get from "then(resolve) ❗ await"  ✅

      👉 CREATE => document(s)

      👉 READ   => document(s)

      👉 UPDATE => messages

      👉 DELETE => messages
      


Chapter 6 : Populate Relation  ✌️

  🌿 In mongoose, we can also establish relation between multiple collections. 

  👉 Set-up

  ⭕ In Schema

    anyName: {
      type : mongoose.Types.ObjectId,
      ref : "collection_name"
    }


  ⭕ When need to get

    > await model.fine({}).populate("collection_name", "view_specific_field -ignore_specific_field");


    
Chapter 7 : MongoDB altas  ✌️

  👉 Used MongoBD altas for access mongoDB's database from anywhere.

😊 END 😊
*/
