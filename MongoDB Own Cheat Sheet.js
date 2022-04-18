
/*

❤️❤️❤️ MongoDB & Mongoose ❤️❤️❤️

Chapter 1 : What is Database ?  ✌️

  Note: Databases are used for storing, maintaining and accessing any sort of data.


  # Types of DataBase  ✅

    1. Relational Database Management System ( RDBMS )   📌

      👉 That Database used SQL command.

      Example: MySQL, PostgreSQL, Oracle Database etc.


    2. Non Relational Database Management System   📌

      👉 That Database used NoSQL command.

      Example: MongoDB etc.


  # different between RDBMS VS MongoDB  ✅

    RDBMS : multiple related tables combination built a RDBMS Database.

    MongoBD : Each document specifically store one thing information. 


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

  Note: For localhost, At first need to install MongoDB software on our PC,
   then attach that " bin " folder in " System Environment Variables "

  Note: By Default In localhost, MongoDB's all Data storing in " data " folder where we already installed mongoDB software, but we can change it.
  
    mySetUP =>  C:\Database\mongodb\data  


  🟡 Start mongoDB's server on localhost by using CMD 🟡

    > mongo


Chapter 3 : CRUD Operation in MongoDB  ✌️

  # Basic CRUD Commands  ✅

    1. Show All Databases  📌

      > show dbs;


    2. Create New Database or Switch Any Exist Database  📌

      > use database_name;


    3. Show Current Database  📌

      > db;

    4. Show current Database's All Collections  📌

      > show collections;



  🟢 CREATE 

    Syntax :  🧬

      🌿 insertOne( {document} )  | insertMany( [documentsArray] )

      👉 No Need to define Condition inside those methods.

    5. create a new collection with insert one document  📌

      > db.collection.insertOne( {document} );

      👉 We can insert one Object or JSON,
       If we inserted Object then convert it to JSON format then stored.


      Note: No need to create collection separately, Just declare collection-name with insertOne() or insertMany() methods,

       automatically created collection with that collection-name in Database
      or, if already exists then used that collection.


      👉 With every document MongoDB attach by default a universal unique "_id".



    6. Create a new collection with insert many documents  📌

      > db.collection.insertMany( [documentsArray] );

      Note: We can insert a Array which have documents of collection.



  🟢 READ

    Syntax :  🧬

     🌿 findOne( {conditionForFind} )  |  find( {conditionForFind} ) 
      
    👉 Inside " findOne() & find() " methods, we can define conditions's Object [OPTIONAL]

    ⚠️  If don't want select all documents, then define condition.


    7. When want to get one document from collection  📌

        > db.collection.findOne( {conditions} );

      👉 return a JSON.

      👉 If that condition was matching with multiple documents,
       even return only one 1st matched document.[ cause findOne() ]


    8. When want to get multiple documents from collection  📌

      > db.collection.find( {conditions} );

      👉 return a Array which store all of them documents that matched with conditions.

      👉 When we want to get all documents from that collection, 
       NO NEED to define any condition.


    9. If we want to control showing Fields  📌

      > db.collection.findOne( {condition} ,{"key" : 0 || 1,... });

      > db.collection.find( {condition} ,{"key" : 0 || 1,... });


      Note: 
      
        🟢 0 means don't display

        🟢 1 means display   [ DEFAULT ]

      Note: can define multiple field's keys.

      👉 Condition must be define, even haven't any condition then declare => {},
       cause it must be define 2nd parameter.

        ⚠️ condition = {} => for select all documents.
      

  🟡 " pretty() & limit() & skip() " methods only work with " db.collection.find() " method 🟡


    10. display a collection's documents through pretty format  📌

      > db.collection.find( {conditions} ).pretty()

      👉 " pretty() " method just used for display documents in pretty format,
        nothing else.    


    11. If we want to display limited documents from multiple documents  📌

      > db.collection.find( {conditions} ).pretty().limit(number)

      Note: pretty() OPTIONAL but find() must be define.


    12. If we want to display documents through skipping some documents  📌

      > db.collection.find().limit(number).pretty().skip(number)

      Note: limit() & pretty() OPTIONAL but find() must be define.



  🟢 UPDATE

    Syntax : 🧬

     🌿 updateOne({ find, update })  |  updateMany({ find, update }) 

     👉 condition must be define inside those methods.


    13. When want to update one document  📌

       > db.collection.updateOne( {conditionForFind},{ $set:{ key:"value",... }});

       1️⃣ Parameter :  {conditionForFind},

       2️⃣ Parameter :   { $set : { updateObject } }


       Example:  📝
       
        > db.users.updateOne({ "name":"Tangilur" },{ $set : { age: "23", "address" : "joypurhat" }})


      Note: condition must be define,even haven't any condition then declare => {},
       cause " { $set : {} } " must be define 2nd parameter.

        ⚠️ condition = {} => select all documents.


      👉 If that condition was matching with multiple documents ,
       even update only one 1st matched document.[ cause updateOne() ]


    14. When want to update multiple documents  📌

      > db.collection.updateMany( {conditionForFind},{ $set:{ key:"value",... }});
  
      Example:  📝 
      
        db.users.updateMany({},{ $set : { "age":"23", address : "joypurhat" }});


  🟢 DELETE

    Syntax :  🧬

     🌿 deleteOne( {conditionForFind} )  |  deleteMany( {conditionForFind} ) 

     👉 condition must be define inside those methods.


    15. When want to delete one document  📌

      > db.collection.deleteOne( {conditionForFind} )

      👉 If that condition was matching with multiple document ,
       even delete only one 1st matched document.[ cause deleteOne() ]


    16. When want to delete multiple documents  📌

      > db.collection.deleteMany( {conditionForFind} );

      Example: db.collection.deleteMany( {"name": "Tangil"} );



  # Summary   ✅

    🟢 Create => db.collection.insertOne( {} ) ❗ .insertMany( [{},...] );

    🟢 Read   => db.collection.findOne( {conditionForFind} , { "keys" : 0 || 1 } )  ❗

                 .find( {conditionForFind},{ "keys" : 0 || 1 }).limit(n),skip(n).pretty();

    🟢 Update => db.collection.updateOne( {conditionForFind},{ $set : { ... } })  ❗

                .updateMany( {conditionForFind},{ $set : { ... } } )

    🟢 Delete => db.collection.deleteOne( {conditionForFind} )  ❗

                 .deleteMany( {conditionForFind} );

       
    👉 Define Conditions Into function 

      🟢 Create  => No Need

      🟢 Read    => Optional  [ If Don't Want Select All Documents ]

      🟢 Update  => Must Be

      🟢 Delete  => Must Be
     



Chapter 4 : mongoose  ✌️

  # What is mongoose ?  ✅

    Note: Elegant Object Data Modeling for Express JS.

    👉 Imagination every documents is like a Javascript's Object.


  # How to connect Node JS with MongoDB through mongoose  ✅

    > Node JS => mongoose => mongo driver => mongoDB => Node JS


  # Benefits fo using mongoose  ✅

    1. Abstraction from raw low level MongoDB.

      👉 give us pre-built some plugin.

    2. Relation between multiple NoSQL Databases.

    3. Provides Schema Validation.

      👉 mongoose.Schema({});

    4. Object-Data Mapping 

      👉 mongoose.model( collectionName, Schema );

      Note: Translation of data into object that our code is more understandable.

    5. ~40-60% write less code compared to raw MongoDB package.



  # install mongoose in our application  ✅

    > npm install mongoose

    > const mongoose = require("mongoose");

      👉 Return a Object & that Object-Name anything we can define.


  # Connect localhost Database in our Application through mongoose  ✅ 

    Syntax:  🧬

      const mongoose = require("mongoose");

      🟢 mongoose.connect("mongodb://localhost:27017/DatabaseName")
       .then(() => console.log('successfully connected'))
       .catch((error) => console.log(error.message));

      or,

      🟢 (async()=>{

            try {
              await mongoose.connect(database_url);
              console.log("database was connected");
          
            } catch (error) {
                console.log("something was wrong");
            }
            
          })();
      

    Note: " mongoose.connect() " method return a promise,
     we can handle it by using,

      👉 then & catch

      👉 async & await

    doesn't even matter,
     it's just for used checking connection establish successfully or not.


    ⭐ If exist that Database then used it,
     otherwise create that Database.



  # create a Schema  ✅

    Note: Schema means a structure of database which also help to validation when inserting Data in Database.
    

    Syntax :  🧬

      const mongoose = require("mongoose");

      const createSchema = mongoose.Schema( {object} );


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

      });

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

        1. type : String ❗ Number ❗ Boolean ❗ Date ...

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

            ⭕ enum : ["accept", "only", "those", "values"]


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
              

        2. required : true ❗ false ❗ [Boolean, "ERROR-message"] 
        
          👉 Default => false 


        3. default : "set default value if user not define any value then apply"

        4. unique : true ❗ false   
        
          👉 Default => false 

          
        5. Create Custom Validate,

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

        ⭐ Used 3rd party library for Form's "type:String" validation

          👉 Both server & client-side, we can used that library.

          🌿 install 

            > npm install validator

            > const validator = require("validator");

            👉 return an Object which has multiple methods those return Boolean Value.


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
       then just simply declare that key object into an Array 📌 

        Syntax : 🧬

          mongoose.Schema({

            ArrayName : [{

              key : {},
              ...
            }]
          });
      
      👉 Initialization : document.key = [].concat( {object},... )
   


  # create a Mongoose Model  ✅

    Note: A Mongoose model is a wrapper on the Mongoose Schema,
     & provides an interface to the database for creating, reading, updating, deleting documents etc.


    Note: The " mongoose.model() " method is used for create a model object which help to create a collection of a particular database of MongoDB with Schema's Validation. 
        

    Note:  The name of the collection created by the model function,
     
      How : our given collection-name ( as a parameter ) convert to lowercase and put " s " in the end.     
 
      Example: TanGil  => tangils


    Syntax:  🧬

      const model = mongoose.model( CollectionName, CollectionSchema );

      👉 return a Object.


    # Parameters: ✅
    
      Note: This function accepts two parameters:

       1. CollectionName => It is the name of the collection.

        Example: Tangil  => tangils

       2. CollectionSchema: It is the Schema of the collection for validation.


    # Return type: ✅
    
      Note: That function returns the model object.


    Example :  📝

     🟠 todos.models.js 

      > const mongoose = require("mongoose");

      require("dotenv").config();

      mongoose.connect(process.env.mongoDB_Url)
      .then(()=>console.log(`connection successfully`))
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
      


Chapter 5 : CRUD in Mongoose  ✌️

  👉 In Mongoose, We can do the CRUD operation by using " mongoose.model() " returned object.

  👉 Syntax almost similar with MongoDB but that mongoose's model object return a promise for working asynchronously.

  👉 we can handle that promise by using

    🟢 then & catch

    🟢 async & await ⭐

    doesn't even matter


  🟡 Create 🟡

  # When want to insert one document In MongoDB's Database  ✅

    Note: " insertOne() " method isn't available is mongoose.So 😔


    Syntax:  🧬

      model(oneDocument).save(error);

    or, 

      const document = model(oneDocument); // here attach mongoDB's unique _id

      document.save(error);


    Example: 📝

      const model = mongoose.model("TODO",Schema)

      app.post("/",(req,res)=>{

        const document =  model(req.body);

      or,

        const document = model();

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
      })
        

    Note: " model({}) " method return a object which store given Object's Data,
     Here into that object also attach MongoDB's unique " _id " BY DEFAULT.

    Note: " save() " method used for save that document's object into MongoDB,
     It's take also one callBack() function which just for checking.

    👉 That " save(error)  " function only used when we are ready to insert one document in MongoDB.



  # When want to insert multiple documents In MongoDB' Database  ✅

    👉 Syntax Almost similar to MongoDB's Syntax,
     but just return a promise for conforming & also can get those documents.


    Syntax:  🧬

      🟢 model.insertMany( arrayDocuments )
      .then( result )
      .catch( error );
    
    or, 

      🟢 async (req, res) => {

        try{

          await model.insertMany( arrayDocument );

          res.send("Register Successfully");

        }catch(error){}

      }

    👉 " .then(result) | await " return that inserted document's Array. 


    Example:  📝

      app.post('/', async (req, res) => {

          try {

            await model.insertMany(req.body);
            res.send("Register Successfully");
              
          } catch (error) {      
              res.send(error.message)
          }

      });



  🟡 Update 🟡

  # When want to update one document Into MongoDB's Database ✅

    Note: Syntax almost similar to MongoDB's Syntax,
     but just return a promise for conforming message.

    Syntax:  🧬

      🟢 model.updateOne( {conditionForFind},{ $set : {} })
      .then(message)
      .catch(error);

    or,

      🟢 async (req, res) => {

        try{

          await model.updateOne( {conditionForFind},{ $set : {} });
          
        }catch(error){}

      }

    👉 " .then(message) | await  " return mongoose compiler's message.


    Example: 📝

      todos.put("/:title", async(req,res)=>{

        try{

          await model.updateOne({title:req.params.title},{
            $set : {
                description : "i am self learner"
            }
          })

          res.send("One Document update successfully")

        }catch(error){
          res.send(error.message);
        }

      });



  # When want to update multiple documents Into MongoDB' Database ✅

    👉 That procedure as same as like " model.updateOne() " method

    Syntax:  🧬

    🟢 model.updateMany( {conditionForFind},{ $set : {} })
      .then(result)
      .catch(error);

    or,

    🟢 async (req, res) => {

        try{

          await model.updateMany( {conditionForFind},{ $set : {} });
          
        }catch(error){}

      }

    👉 " .then( message ) | await " return mongoose compiler's message.


    Example: 📝

      todos.put("/:title", async(req,res)=>{

        try{

          await model.updateMany({title:req.params.title},{
            $set : {
                description : "i am self learner"
            }
          })

          res.send("Multiple Documents update successfully")

        }catch(error){
          res.send(error.message);
        }

      });


  🟡 Read 🟡

    # When want to get one document From MongoDB' Database  ✅

      Note: Syntax almost similar to MongoDB's Syntax,
       but just get that document into promise.


      Syntax:  🧬

      🟢 model.findOne( {conditionForFind},{key : 0 | 1 });
        .then(result)
        .catch(error)

      or,

      🟢 async (req, res) => {

          try{

            const document = await model.findOne( {conditionForFind},{key : 0 | 1 } );

            res.send(document);

          }catch(error){}

        }

      👉 " .then(result) | await "  return expected a JSON Document.
      

      Example:  📝

        app.get('/', async (req, res) => {

            try {
                const document = await model.findOne( {name : "Tangilur Rahman"});

                res.send(document)
            } catch (error) {
                res.send(error.message)
            }

        });



    # When want to get multiple documents From MongoDB's Database  ✅

      Note: Syntax almost similar to MongoDB's Syntax,
       but just get that documents of Array into promise .


      Syntax:  🧬

      🟢 model.find( {conditionForFind},{key : 0 | 1 }).limit(n).skip(n)
        .then(result)
        .catch(error)

        
      or,

      🟢 async (req, res) => {

          try{

            const documents = await model.find( {conditionForFind},{key : 0 | 1 }).limit(n).skip(n);

            res.send(documents);

          }catch(error){}

        }

      👉 " .then(result) | await "  return expected a documents of Array.
      

      Note: Base on condition we will get multiple documents whatever we want.

      👉 limit(), skip() methods are OPTIONAL.

      👉 If we don't define condition then we will get that collection's all documents.


      Example:  📝

        app.get('/', async (req, res) => {

            try {

                const arrayDocu = await model.find( {name : "Bangladesh"},{ _id : 0}).limit(1).skip(2);
                res.send(arrayDocu)

            } catch (error) {
                res.send(error.message)
            }

        });



  🟡 Delete 🟡

    # When want to delete one document From MongoDB's Database ✅

    Note: Syntax almost similar to MongoDB's Syntax,
     but just return a promise for conforming message.

    Syntax: 🧬

      🟢 model.deleteOne( {conditionForFind} )
        .then(message)
        .catch(error);

    or,

      🟢 async (req, res) => {

          try{

            await model.deleteOne( {conditionForFind} );
            
          }catch(error){}

        }

    👉 " .then(message) | await " return mongoose compiler's message.


    Example : 📝

      app.delete('/', async (req, res) => {

        try {
            await model.deleteOne( {name : "china"});
            res.send("delete successfully")
        } catch (error) {
            
            res.send(error.message)
        }

      });


  # When want to delete multiple documents From MongoDB's Database ✅

    👉 That procedure as same as like " deleteOne() " method.

    Syntax: 🧬

      🟢 model.deleteMany( {conditionForFind} )
      .then(message)
      .catch(error);

    or,

      🟢 async (req, res) => {

        try{

          await model.deleteMany( {conditionForFind} );
            
        }catch(error){}

      }

    👉 " .then(message) | await " return mongoose compiler's message.


    Example : 📝

      app.delete('/', async (req, res) => {

        try {
            await model.deleteMany( {name : "china"});
            res.send("deletes successfully")

        } catch (error) {
            
            res.send(error.message)
        }

      });



  🟢 Summary 🟢

    🟡 Set-up Mongoose

    1. At first connect MongoDB's Database through Mongoose in our application. 📌

      > const mongoose = require("mongoose");

        mongoose.connect(mongodb://localhost:27017/DatabaseName)
        .then(message)
        .catch( error );


    2. Then create Schema for Database's Structure & validation of inputting data  📌

      > const schema = mongoose.Schema({ key : validator })


    3. Then create model for operation CRUD in a collection with Schema validation

      > const model = mongoose.model( collectionName, Schema );


    🟡 CRUD Operation
 
    4. Create Document(s)  📌

      🟢 One Document Create

        > model(oneDocument).save(error);


      🟢 multiple Documents Create at a time

        > await model.insertMany( arrayDocument);
          


    5. Read Document(s)  📌

      🟢 One Document Read

        > await model.findOne( {conditionForFind},{ selection });


      🟢 multiple Document Read
      
        > await model.find( {conditionForFind},{ selection }).limit(number).skip(number);
      

    6. Update Document(s) 📌

      🟢 one document update

        > await model.updateOne( {conditionForFind},{ $set : {...} } );
         
        
      🟢 multiple Documents update at a time 

        > await model.updateMany( {conditionForFind},{ $set : {...} });      


    7. Delete Document(s)  📌

      🟢 one document update

        > await model.deleteOne( {conditionForFind} );
          

      🟢 multiple Documents delete at a time 

        > await model.deleteMany( {conditionForFind} );
      

    # What could we get from " then(resolve) " method or " await "  ✅

      👉 CREATE => document(s)

      👉 READ   => document(s)

      👉 UPDATE => messages

      👉 DELETE => messages
      


Chapter 6 : MongoDB Cloud  ✌️

  👉 Used MongoBD Cloud for access MongoDB's Database from anywhere.


*/