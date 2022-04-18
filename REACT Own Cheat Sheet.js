/*

❤️❤️❤️ Learn React ❤️❤️❤️


Chapter 1 : What is React? ✌️
  
  Note: A JavaScript library for building user interfaces design.

  Note: React isn't a framework, cause it haven't those thing which them required a framework.

  Note: we can create single page web-application by using react or mobile application ( Native React ).


  # Advantage of React  ✅

    Note: If we want to change specific part of the website then server send again whole page with changes ( full file sizes ) and  browser refresh the whole page.

    But in React when we want to change specific part of the website then server just send that part ( component ) and browser attach them without refresh whole page.

   👉 It's possible for React Virtual DOM.
   
  👉 It is faster than normal website cause server just send specific sizes of components.



Chapter 2 : ES6 or ECMAScript 2015  ✌️

  👉 React created base on ES6 and after that ECMAScript's version.



Chapter 3 : Components  ✌️

  Note: React is all about components.

  Note: All JSX tags can convert component. It could be single tag or a group of tags.

  Note: Components are reusable building block in user interface,
   as same purpose using Function.
    
  👉 HTML & CSS with JS make a component.


  Note: Benefit of using components

    1. Reusability

    2. Help in maintaining codes


  ⭐ Multiple components combination, we can built a web-page.



Chapter 4 : Requirement Installation  ✌️

  # Node JS   ✅
    
    Note: Node JS is a JavaScript runtime environment building on Chrome's V8 engine which can run on pc or server.

    👉 When we installed Node JS in our Pc then we can access NPM server through Command Prompt.

    Note:

      🟢 npm : Node Package Manager

      🟢 npx : Node Package Execute


  # install React & React-Dom  ✅
    
    1. command prompt  📌
      
      > npx create-react-app app-name

    or,

      > yarn create react-app app-name
       
    👉 Through that command installing automatically React & React-Dom modules from npm server.


    2.cd app-name  📌
      
      Note: Change directory if command prompt path isn't there.


    3.npm start  📌
      
      Note: That command for start localhost server in 3000 port.


    4. npm init  📌
     
      Note: That command for display " package.json " file where add all dependencies,
       if don't exists that file then create "package.json" file.

      👉 Create "package.json" file with empty its keys value

        > npm init -y


  
Chapter 5 : Default File Structure By React ✌️

  # .gitignore  ✅
    
    Note: When we want to submit our project on github, then through that file we can decided which files not submit on github.

    Example: 📝

      node_modules/
      .env/
      ...
  

  # README.md  ✅

    Note: That file contain information about our project. When we submitted our project on github that is become documentation about our project for everyone.

  
  # package.json  ✅

    Note: That file is heart for our project,
     here define all dependencies, projectName, version everything in JSON format.


  # package-lock.json  ✅

    Note: package-lock.json file is help to control dependencies's version.


  # node_modules ( folder )  ✅

    Note: That folder is storage of our project.

     When installing third party modules from npm server that module stored in this folder.

    👉 When installing new module from npm server then automatically update on 
    
      🟢 package.json

      🟢 package-lock.json 

      🟢 node_modules



  # public ( folder )  ✅
    
    1. favicon.ico  📌

      Note : For project favicon.


    2. index.html  📌

      Note: Our project has only one HTML file cause React used for single page application.
    
      👉 From here our application is starting to execute.


    3. robots.txt  📌

      Note: It's used for SEO.


    4. manifest.json

      Note: It's used for create "progressive web app".


    5. logo   📌

      Note: Just two react logo with different sizes.


  # src ( folder )  ✅

    Note: src => source code.

    👉 That's the main folder for application development.


    1. app.test.js & setupTests.js  📌

      Note: Those files used for testing our application.

    
    2. reportWebVitals.js  📌

      Note: For generating reports.

    
    3. logo.svg  📌

      Note: That's logo which is rotate round in center at first look. 


  ⭐ remaining 4 most importance files
     
    4. index.js  📌
    
      👉 That is the main file which is only connect with public/index.html  📌

      👉  index.js => index.html  


      🟢 Explain index.js file's Statements

      ⭕ import React from "react";
       
        Note: Import " react " module from node_modules.


      ⭕ import ReactDOM from "react-dom";
        
        Note: Import " react-dom " module from node_modules.
    

      ⭐ " react " module used for generate Javascript Codes
        & " react-dom " module used for render components.


      ⭕ import "./index.css";
       
        Note: Import index.css file
        
        👉 In React can import CSS files also ( also images or other files ).


      ⭕ import App from "./App";

        Note: import App.js file's component.
        
        👉 It's just a simple component nothing else.


      ⭕ import reportWebVitals from './reportWebVitals';

        Note: Import reportWebVitals.js file's component for report generate.


      ⚠️ After React 18

      ⭕ const root = ReactDom.createRoot(document.getElementById("root"));
        root.render(<App />)


      #️⃣ ReactDOM.createRoot() method

        🟢 ReactDom => Object

        🟢 createRoot() => It's method

        👉 "createRoot()" method takes a argument,
          🎯 DOM where attach our Components, its return an Object.

        👉 That Object has a method "render()" which takes only one Component & render that.
         


      🌿 <React.StrictMode> component for "use strict"  [OPTIONAL]

      🌿 "<App />" means, call that Component which comes from App.js ( as like function )


      🌿 document.getElementById("root");

        👉 It select that only contain div tag in public/index.html file,

        ⭐ For add <App /> component.



    5. index.css  📌
      
      Note: Declare universal CSS Styles ( html, *, body tag etc ) for index.js file.


    6. App.js   📌

      Note: It's mainly used for collect multiple components and attach them into index.js file.


    7. App.CSS  📌
      
      Note: Declare CSS Styles only for App.js file.


  ⭐ "src" folder all files's name anything we can define,
    👉 Except "index.js" file.
    



Chapter 6 : Create A Component   ✌️

  # Create index.js file  ✅

    Note: At first must be create "index.js" file in src folder,
     cause only "index.js" file can connect with "public/index.html" file.

    Example: 📝

      import React from "react";
      import ReactDOM from "react-dom/client"; 👈
      import App from "./App";
      import "./index.css";

      const root = ReactDom.createRoot(document.getElementById("root"));
      root.render(<App />);

  
  ⚠️ After React 18

  # ReactDom.createRoot();  ✅
  
    👉 ReactDOM Object's method is createRoot().

    Note: The purpose of the createRoot() method is to select root-DOM which exist into public/index.html

    👉 "createRoot()" method takes a argument,
      🎯 DOM where attach our Components, its return an Object.

    👉 That Object has a method "render()" which takes only one Component & render that.

      Note: The purpose of the render() method is to display the specific JSX component inside the specific position of website. 


    Example:  📝

      const root = ReactDom.createRoot(document.getElementById("root"));
      root.render(<App />);

      👉 variable-name, instead of "root" anything we can define.
      
    
    #️⃣ Add A Component into root.render() method

      Syntax :  🧬

        < Component />  
      or
        <Component> ... </Component>


      Note: 
        ✒️ 1st option when that component hasn't any children component

        ✒️ 2nt option when that component has any children component or not also.

      ⭐⭐⭐ Component Name must be start with capital letter, 
       cause React compiler can differentiate  between JSX tags ( small-letter ) and Component.

       
      Example:  📝

        1. <App />

        2. <WebDeveloper >
            <HTML/>
            <CSS/>
            <JS/> 
          </WebDeveloper>



  # index.css file ✅
     
    👉 OPTIONAL 

    Note: Create "index.css" file for declare universal CSS styles which them can apply with all JSX elements. 

    ⭐ Best practice : Declare common CSS styles in "index.css" file &
     create separate CSS file for each component.

    Note: We can define any name for that CSS file but,   
    ⭐ Best practice : JSX file's name & CSS file's name SAME only for easily identification.[ALWAYS] 


    #️ import External CSS file into any component  ✅

      > import './index.css';

      👉 Must be define (.css) extension when need to import any CSS file in JSX file.


    Example: Add External CSS File In a Component 📝

    🟠 app.css

      .container {
        color: red;
        background-color: green;
      }

      #id {
        text-decoration: underline;
      }

    🟠 App.js

      import "./App.css";

      const App = () => {
        return (
        <h1 className={"container,..."} id={"id"}>I am App Component</h1>
      )};
      export default App;

    
    #️⃣ We can also declare inline CSS styles with any JSX element in React

      👉 Declare inline CSS styles through JavaScript Object.

      Syntax :  🧬

        style = { { cssProperty : "value" , ...} }


      Example :  📝
         
        🟢 <h2 style = {{ color: "red",backgroundColor: "purple" }}> Hello World </h2>

      or 

        🟢 let styleObject = {
         color: "red",
         backgroundColor: "purple" 
        }

        <h2 style = { styleObject } > Hello World </h2>
       

        
      #️⃣ Compare between HTML & React with Inline CSS Attribute  

      🟠 In HTML 

        <h1 style = "color : red; background-color : green">Bangladesh </h1>

        👉 Like String & Each style end with (;)

        👉 When CSS property's name in multiple words => background-color


      🟠 In React

        <h2 style = {{ color: "red",backgroundColor: "purple" }}> Hello World </h2>

        👉 Like Object & Each style end with (,)

        👉 When CSS property's name in multiple words => backgroundColor [camelCase]



  # What is JSX ?  ✅
    
    Note: JSX => JavaScript XML. 
    
    👉 It allows us to directly write HTML in React.

    Note:

      HTML         JSX

      class   =>   className
    
      👉 Except That, everything almost same like HTML.


    Note: We can declare JSX tags anywhere in JavaScript file normally, not only in "return" statement.

    👉 but, outside "return" statement JSX tags haven't any output,
     cause a component work like a function.


    ⭐⭐⭐ Each Component can return only one JSX Tag,
     So, we can wrap multiple JSX Tags in a single Tag's container or fragment and return it.

      🟢 <div> JSX Tags </div>   

      🟢 <> JSX Tags </>  🌟


    Example:  📝

      const App = ()=>{

        let variable = <h2> Welcome </h2>;

        return <>

          <h1> Hello World </h1>
          {variable}
        </>
      }

      👉 We can also store JSX tags as a variable and use it anywhere.


    ⭐ { Javascript Codes }

      Note: We can declare JavaScript code into JSX Tag by using curly braces.
       Inside curly braces we can declare Javascript's variable or any JavaScript codes for that JSX Tag.


      Example: 📝

        return (
          <h2> {`My Name is ${name}`} </h2>
        );



  # App.js  ✅

    Note: We can declare all requirement components into "index.js" file, but it become difficult to maintain our code. 

     So, we need to create multiple components separately & attach them with "index.js" file for maintain our efficiently.


    👉 "App.js" is a simple component, 
      basically "App.js" used for collection all components and at last exported itself for "index.js" file.

    Note: We can define any name,but commonly used "App.js". [Standard]


    Syntax :  🧬

      const componentName = () =>{
           
        // JS codes

        return(
          // JSX Tag
        )

      }

      export default componentName;


    👉 Instead of Arrow Function, we can also used normal function normally in React.


    ⭐⭐⭐  All Components must be export for other files can import & use them.

      🟢 export { componentName };

      🟢 export default componentName; 🌟


    Example: 📝

      import "./App.css";

      const App = () => {
        return <h1>I am App Component</h1>
      }

      export default App;
            


  # import that "App.js" component into index.js file  ✅

    1️⃣ Firstly we need to import that module in index.js file

    2️⃣ Then attach that component in index.html file through ReactDom.render() method


    Example:  📝
        
      import App from './App.js'  ❗  './App';

      ReactDom.render( <App /> ❗ <App></App> , document.getElementById("root"));

      
    👉 In React, If any modules import from Javascript file then
     No need to add extension with that file [OPTIONAL].

      ⚠️ That procedure only work with Javascript file.

        Example:  📝

          import App from "./App"

          import "./App.css"

          import "./demo.json"



  # We can create components through 2 ways in any Javascript File ✅

    1. Functional components  📌

      Syntax: 🧬

       let functionName = ( props ) =>{
         return ( { props.use } );
       }

       export default functionName;


      ⭐ Almost same as like normal function.


    2. Class components  📌

      Syntax:  🧬

        import React,{ Component } from 'react';

        class ClassName extends Component {

          render(){

           return ( { this.props.use } );

          }
        }

        export default ClassName;


    👉 With both of them must be export for other files can import & use them.


    Example: Import Those Components  📝

      return 
        <> 

          <FunctionName />
          <ClassName />

        </>

    Note: Every Functional or Class Components we can call this way [SAME], 
     only attach those things with "index.html" file which are return from them through "return" statement.

    
    😊 Functional component is more easy than Class component for me.



  # Create Functional Component  ✅

    Note: Every Javascript file can contain only one Functional Component which return only one JSX Container. [cause export default --- ]

    👉 If we want to declare multiple Functional Components in a Javascript file,
     then define export {component1,... } procedure.
    
    ⭐ Best Practice : We can create CSS file separately for each component file and import them.

    ⭐ Best Practice : JavaScript fileName & functionName & CSS fileName are same for better identification a complete component package [OPTIONAL].

    👉 Each Component can return only one JSX Tag,
     So, we can wrap multiple JSX Tags in a single Tag's container and return it.

      Example:  📝

       import "./App.css";

       const App = () => {

         return (
          <div>
              <h2>Hello World</h2>
              <p>I am Tangilur Rahman</p>
              ...
          </div>

         );

        }

        export default App;

      
      👉 "return" statement with first bracket use for just easily understanding "return" statement's area,nothing else.
       Even it doesn't any impact in our code.[OPTIONAL]

       Example:  📝

        return <div> ... </div>;
        return (<div> ... </div>);
       

      👉 Above "return" statement we can define JavaScript Codes normally & JSX tags also.

      Example:  📝  1️⃣

        const App = () => {

        const name = "Tangilur Rahman";

        const tag = <h2>{`my name is ${name}`}</h2>

        return <div>{tag}</div>;
      };

      export default App;


      Example :  📝 2️⃣

        import "./ExpenseItem.css";

        const ExpenseItem = () => {
          
          let expenseDate = new Date().toDateString();
          let expenseItem = "Car Insurance";
          let expenseAmount = 200;

          return (

            <div className="container">

              <p> {expenseDate}</p>
              <div className="expenseItem">
                <h2>{expenseItem}</h2>
                <h2>${expenseAmount}</h2>
              </div>

            </div>

          );
        }

        export default ExpenseItem;



Chapter 7 : Spread Component into Sub Folder  ✌️

  Note: We need to create multiple components for a website, If we declare them directly into src folder then it isn't easy to maintain. 

  ⭐ Best Practice : Select one parent-component ( App.js ) which connect with index.js,
   Now create multiple sub-folders how much deep we need then connect them with parent-component ( App.js ).

  ⭐ Best Practice : Department wise create sub-folder. 


 
Chapter 8 : Passing Data through "props" Parameter from Parent to Child Component ✌️  

  👉 Instead of "props" we can define any-name, but "props" name universally used.


  # Procedure  ✅

  🟢 In Parent Component, passing data procedure as same as like declaring inline attribute into HTML tag.

  🟢 In Child Component, all passing argument's values stored in a Object,
   now we can used that parameter as like Object.


    Syntax:  🧬

      🟠 Parent Component 

      const Parent = () => {

        return (

        <Child 
        
          variable = {value} variable1 = "value" variable2 = {10}
          ...
        />

        );
      };

      export default Parent;


    👉 Can pass multiple arguments how much we want & any types of values.
       

      🟠 Child Component 

        const Child = (props) => {

          return (
            <div>
                <h2>Name is {props.variable}</h2>
                <h2>Address is {props.variable}</h2>
               ...
            </div>
          )
        }

        export default Child;


      👉 Here "props" is a object & passing argument's values that object's properties.

      👉 name = "Tangilur Rahman" => props.name  [ both name must be same ]


    Example: 📝
    
      🟠 App.js
      
        function App() {
   
          let expenseDate = new Date().toDateString();
          let expenseItem = "Car Insurance";
          let expenseAmount = 200;

          return (
            <div className="container">

              <ExpenseItem

                date = {expenseDate}
                item = {expenseItem}
                amount = {expenseAmount} />

              </ExpenseItem>

            </div>
          );
        }

        export default App;



      🔴 ExpenseItem.js

      function ExpenseItem( props ) {

        return (

          <div className="container">

            <p> {props.date}</p>

            <div className="expenseItem">

              <h2>{props.item}</h2>
              <h2>${props.amount}</h2>

            </div>

          </div>
        );
      }

      export default ExpenseItem;




Chapter 9 : Fetching Data From An Array  ✌️

  # Fetching Data From JSON File  ✅

    👉 As same as like fetching Data from a normal Array.

    ⭐ Best Procedure : Fetching data from any Array used Array.map(callBackFunction) which return a new Array without impact original Array.


    Example:  📝
     
    🟠 Parent Component 

     import json from './fileName.json';

     const App = () =>{

      return (  
       <div>
      {
        json.map( (value,index) =>{

          return (

            <ChildComponent 

              key = {index}
              id={value.id}
              name={value.name}
              address={value.address}
              skill={value.skill}

            />
          )

        });
      }

      </div>

      );
     }

    export default App;


    🟠 Child Component

      const Child = (props) => {
  
      return (
        <>

          <h2>ID : {props.id}</h2>
          <h2>Name is  : {props.Name}</h2>
          <h2>Address is  : {props.address}</h2>
          <h2>Skill is  : {props.skill}</h2>
      
        </>);
      
      } 
    export default Child;
     


Chapter 10 : Create multiple components from single component  ✌️

   👉 That's the main purpose of create component separately.

   ⭐ Must be wrapped into a tag container or fragment.

   Syntax:  🧬

     return(

        <div>

          <component-1 />
          <component-1 />
          <component-1 />

        </div>
     );

    Note: We can imagine component as like Function.

    👉 No relation with each other [Independent].


   Example:  📝
     
    🟠 App.js

      import "./App.css";
      import ExpenseItem from "./components/ExpenseItem";

      function App() {

        let arr = [
          {
            expenseDate: new Date().toDateString(),
            expenseItem: "Car Insurance",
            expenseAmount: 200,
          },
          {
            expenseDate: new Date().toDateString(),
            expenseItem: "School Fee",
            expenseAmount: 400,
          },
        ];

        let [id1, id2] = arr;

        return (
          <div className="container">

            <ExpenseItem
              date={id1.expenseDate}
              item={id1.expenseItem}
              amount={id1.expenseAmount}
            ></ExpenseItem>

            <ExpenseItem
              date={id2.expenseDate}
              item={id2.expenseItem}
              amount={id2.expenseAmount}
            ></ExpenseItem>
            
          </div>
        );
      }

      export default App;


    🟠 ExpenseItem.js

      import "./ExpenseItem.css";

      const ExpenseItem = (props) =>{
        return (

          <div className="container">
            <p> {props.date}</p>
            <div className="expenseItem">
              <h2>{props.item}</h2>
              <h2>${props.amount}</h2>
            </div>
          </div>

        );
      }

      export default ExpenseItem;




Chapter 11 : Declare Another Component into a Child Component  ✌️

  Note: We can declare multiple another component into a Child component.

  👉 must be wrapped into a tag container or fragment.

  Syntax:  🧬

    🔴 Child Component 

    return (

      <div >

        < Another_Component_1  />
        < Another_Component_2  />
        ...
        
        <div> ... </div>

      </div>

    );
    
    
  Example:  📝

    🔴 ExpenseItem.js

    > const ExpenseItem = (props) => {

      return (
        <div className="container">

        <ExpenseDate date={props.date} />  👈

          <div className="expenseItem">
            <h2>{props.item}</h2>
            <h2>${props.amount}</h2>
          </div>
        </div>
      );
    }

    export default ExpenseItem;


    🔴 ExpenseDate.js

    > import "./ExpenseDate.css";

      const ExpenseDate = (props) => {

        let month = props.date.toLocaleString('default', { month: 'long' });;
        
        let day = props.date.toLocaleString('default', { day: '2-digit' });

          let year = props.date.getFullYear();

        return (
          <div className="expenseDate">

            <p>{month}</p>
            <p>{year}</p>
            <p>{day}</p>  

          </div>);
       }

      export default ExpenseDate;

  
      

Chapter 12 : Nested Components  ✌️

  👉 Another Components inside a Component like container.

  Syntax:  🧬
    
    🟠 App.js

    <ParentComponent className="anyName">
 
       <Child-Component-1 />
       <Child-Component-2 /> 
       ...

    </ParentComponent>


  🟠 ParentComponent.js

    const ParentComponent = (props) => {

      let getClasses = "new-Class " + props.className;
      // return ParentComponent's that CSS className

      return (

        <div className = {classes}>  
         {props.children}  // return all child components
        </div>

      );
    }

    export default ParentComponent;
      
    
  👉 props Object has two pre-define properties,
   
    1️⃣ props.className  

    2️⃣ props.children


  👉 That's time must be declare component this way,

    Syntax :  🧬
    
      <Component >

        <Children />
        ... 

      </Component>



Chapter 13 : Importance VS Code Extension & Chrome Extension for React  ✌️

  💥 ES7+... (VS)

  💥 React Developer Tools.



Chapter 14 : useState() Hook  ✌️


  ⭐ Easily Identify => Every Hook's name start with "use" keyword.

    ✒️ useState (), useEffect (), useContext() etc.

    💥 Hook means method.

  
  👉 useState() method is the member of "react" Module, firstly we need to import it.
    
    Import : 🧬

      import React from 'react';

      React.useState(initialValue);
     
    or,

      import {useState} from 'react';


  👉 "useState()" method used for changing current-value base on specific Event or Condition.
   
  
  Syntax:  🧬 
      
    let array = useState( nothing | initialValue  );

      value = array[0];
      setValue = array[1];
    
  or,

    let [value,setValue] = useState( nothing | initialValue  );

    ✒️ Array Destructuring 


  👉 We can pass any-types of initial-Value or nothing into useState() method.


  👉 useState() method return TWO things through a Array,
      
    1️⃣ variable  ( That for store current value )

    2️⃣ function  ( That for changing that's variable value )
    

  👉 We can define any-name for those variable & function.
      

  Example:  📝

    const App = () =>{

      let [value,setValue] = useState(" InitialValue ");

      let funName = () =>{

        setValue ("new value");
      }

       return (

        <div className = "for-items"> 

          <h2> {value} </h2>
          <button onclick= {funName} > </button>

        </div>

        );
      }
      


  ⭐⭐⭐ When anytime we change useState()'s value through its useState()'s  method then whole page start rendering from 1st line to last line,
    && update every that useState()'s value wherever it declare.

  👉 So, it became create infinity looping, if we declare useState()'s method outside any-function or useEffect() Hook [ANYWHERE].
   

  ⭐ That useState() Hook can apply with every components separately.
  👉 Independent all of them from other.




Chapter 15 : Condition Rendering  ✌️

  # If-Else  ✅

    Example: 1️⃣ ( if-else )

      const ComponentName = () => {

       let Condition = () => {

        if(true){
          return <HomePage />;
        }else{
          return <LoginPage />
        }  

      }
      
      return (

          <div>

            <Condition /> 

          </div>
        );
      }

      export default ComponentName;


    👉 We can't declare if-else statement into "return" statement any-way.
      So, we can define above procedure or can use Ternary Operator.

    
  # Ternary Operator  ✅

    Example: 2️⃣ ( condition ? value : value )

     > const ComponentName = () => {

        return (
          <div>
          
            { true ? <HomePage /> : <LoginPage /> }
    
          </div>
        );
      }

      export default ComponentName;


    👉 That's the best way to doing Conditional Rendering between two components.

    👉 We can declare directly Ternary procedure into "return" statement,
      obviously inside { } .


  # Short Circuit  [AND Operator]  ✅ 

    Example: 3️⃣  ( Short Circuit && )

     > const ComponentName = () => {
        return (

          <div>
          
            {false && <LoginPage />}
 
          </div>
        );
      }

      export default ComponentName;


    👉 It's a AND Operator, if all conditions are true then return component otherwise return null.
 
    Note: We can define multiple conditions in a Short Circuit whatever we want.



Chapter 16 : Event  ✌️

  👉 We can define almost all JavaScript's Events With JSX Tag in React.

  ⭐ used camelCase for declaring eventName.

    ✒️ onClick, onSubmit, onChange etc.


  👉 In React, isn't prefer to used addEventListener(),
   but prefer to used Inline-event.


  Syntax:  🧬
    
    🟢 let fileName = (props) =>{

       let funName = () => {

        // action for Event

       }

       return (

        <JSXTag onEventName = { funName } > </JSXTag>

       );
      }


    👉 In specific event, call that event's function from JSX-tag and define that function above return statement.

  or,

    🟢 return (

      <tag onEventName = {() =>{

        // action for Event

      }};

    );
    

  👉
    1️⃣ procedure : Declaration same as like register inline-event-attribute into HTML Tag.

    2️⃣ procedure : Declare anonymous function directly instead of functionName for that Event, 
      Ordinarily, When need to used event just one time.

   
  Example:  📝

    const Child = () => {

    const funName = () => {
      alert('I am click');
    };

     return (
      <>
        <button onClick={funName}>Click Me</button>

      </>
     );
    };

    export default Child;



Chapter 17 : Handle Form Data  ✌️

  🌿 onChange(callBackFunction)  => For get inputted field's values with every changing.

  🌿 event.target.value =>  Store current inputted value.

  🌿 input.target.name; =>  Store "name" attribute's value which define with <input /> tag.


  Example : Get Form Data & Display when Submit 📝

    import { useState } from 'react';

    const FormData = () => {
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');

      const nameHandler = (input) => {
        setName(input.target.value);
      };

      const emailHandler = (input) => {
        setEmail(input.target.value);
      };
      const passwordHandler = (input) => {
        setPassword(input.target.value);
      };

      const [s_name, s_setName] = useState('');
      const [s_password, s_setPassword] = useState('');
      const [s_email, s_setEmail] = useState('');

      const submitHandler = () => {
        s_setName(name);
        s_setPassword(password);
        s_setEmail(email);

        setName("");
        setPassword("");
        setEmail("")
      };

      return (
        <>
          <form action='#'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter Your Name : '
              onChange={nameHandler}
              value={name}
            />

            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter Your Email : '
              onChange={emailHandler}
              value={email}
            />

            <input
              type='text'
              name='password'
              id='password'
              placeholder='Enter Your Password : '
              onChange={passwordHandler}
              value={password}
            />

            <button type='submit' onClick={submitHandler}>
              Submit
            </button>
          </form>

          <h2>{s_name}</h2>
          <h2>{s_email}</h2>
          <h2>{s_password}</h2>
        </>
      );
    };

    export default FormData;


  👉
    1️⃣st useState() method used for get inputted Form data by using onChange() Event

    2️⃣nd useState() method used for submit that Form data by using onClick() Event



  # useState() Hook with Object  [ For Just ShortCut Procedure ]  ✅


   Example:  📝

    import React, { useState } from "react";

    const FormDate = () => {

      let [user, setUser] = useState({

        name: "",
        email: "",
        password: ""

      });

      let { name, email, password } = user;


      let getInputValue = (input) => {

        let checkName = input.target.name;  
        let inputValue = input.target.value;

        if (checkName === "name") {
          setUser({ name: inputValue, email, password });

        } else if (checkName === "email") {
          setUser({ name, email: inputValue, password });

        } else if (checkName === "password") {
          setUser({ name, email, password: inputValue });
        }

      };


    🟡 most shorthand
          
      setUser({ ...user, [input.target.name]: input.target.value });


      let handleSubmit = (event) => {
        event.preventDefault();

        const userInfo ={
          name,
          email,
          password
        }

        setUser({
          name: "",
          email: "",
          password: "",
        });
      };

      return (
        <div style={{ margin: "20px" }}>

          <form action="" onSubmit={handleSubmit}>

            <label htmlFor="name">Enter Your Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={getInputValue}
            />
            <br />

            <label htmlFor="email">Enter Your Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={getInputValue}
            />
            <br />

            <label htmlFor="password">Enter Your Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={getInputValue}
            />
            <br />

            <button type="submit">Submit</button>

          </form>
        </div>
      );
    }

    export default FormDate;



Chapter 18 : Transfer Data Child To Parent Component  ✌️

  👉 We can transfer data parent to child or child to parent through "props" parameter.

  ⭐ Must be direct Parent & Child relationship between two components.


  # procedure  ✅

    🟢 Parent To Child 

      Note: passing variable as like HTML attribute.

    🟢 Child To Parent 

      Note: Same procedure,but passing functionName.
      
      👉 Called That function from Child Component.


  # Child to Parent  ✅

  Syntax:  🧬

   🟠 Into Parent Component

    const parentComponentFile = () => {

      function funName(getValue){
        console.log(getValue);
      }

      return (

        <childComponent send={funName} />
     
      ) ;
    }
     

   🟠 Into Child Component

    const childComponent = (props) =>{
       
      props.send(sendAnything);  // call that function [funName]

      return ( JSX ) ;
    }

  👉 Call that function through "props" Object's property name.

  👉 We can get any types of value from child to parent through parent-component's Function.


  Example : 📝

  🟠 Parent.js

    import Child from './Child';

    const Parent = () => {
      const myName = (name) => {
        console.log(name);
      };
      return (
        <div>
          <Child send={myName} />
        </div>
      );
    };

    export default Parent;


  🔴 Child.js

    const Child = (props) => {

      props.send('Tangilur Rahman');

      return <div> Child Component </div>;

    };

    export default Child;



  # Create Expense List Project  ✅

   Example:  📝

   🟠 Home.js
   
    import './Home.css'

    import Display from './Display'
    import AddExpense from './AddExpense'
    import { useState } from 'react'

    const Home = () => {
     
      let [expenses,setExpenses] = useState();

      let getExpense = (value) => {
                      
        setExpenses([value,...expenses]);
      }

      return (
        <div>
        <AddExpense getExpense= {getExpense} />
        {expenses.length<1 ? "Enter Some Item..." : <Display arr={expenses}/> }
        
        </div>
      );
    }

    export default Home;
    

  🔴 AddExpense.js

    import { useState } from "react";

    import "./AddExpense.css";

    const AddExpense = (props) => {

      let [task, setTask] = useState({ item: "", amount: "", date: new Date() });

      let { item, amount, date } = task;

      let handleChange = (input) => {

        let checkName = input.target.name;
        let inputValue = input.target.value;

        if (checkName === "item") {
          setTask({ item: inputValue, amount, date });
        } else if (checkName === "amount") {
          setTask({ item, amount: inputValue, date });
        } else if (checkName === "date") {
          setTask({ item, amount, date: inputValue });
        }

      };

      let handleSubmit = (event) => {

        event.preventDefault();

        let object = {
          item,
          amount,
          date: new Date(date),
        };

      🎯 props.getExpense(object);

      };

      return ( INPUT FIELD )

      export default AddExpense;



  🟠 Display.js
   
    import Date from "./Date";
    import "./Display.css";

    const Display = (props) => {
      
      return (
        <div>
          {props.arr.map((value, index) => {
            
            return (
              <div key={index} className="display-container">

                <div className="container">
                  <h2>Task : {index+1}</h2>
                  <h2>{value.item}</h2>
                  <h2>${value.amount}</h2>
                  <Date date={value.date} />
                </div>
              </div>
            );
          })}
        </div>
      );
    };

    export default Display;



Chapter 19 : useEffect() Hook  ✌️
  
  👉 useEffect() method is the member of "react" Module, firstly we need to import it.

    Import : 🧬

      import React from 'react';

      React.useEffect(callBackFunction,[]);
     
    or,

      import {useEffect} from 'react';


  👉 "useEffect()" method used when we need to fetching data from API.

  ⚠️ Don't call any Hook inside any loop, condition or nested function.  
  
  👉 Can call inside normal Function.

  Note: The useEffect() Hook allows us to perform side effects in our components.

    🎯 Some examples of side effects are => fetching data, directly updating the DOM, timers etc


  ⭐⭐⭐ When anytime we change useState()'s value through its useState()'s  method then whole page start rendering from 1st line to last line,
    && update every that useState()'s value wherever it declare.

  👉 So, it became create infinity looping,
  that's kind of problem we can solve by using useEffect() Hook.

  
  👉 We can control useEffect()'s inside Codes while rendering.

  #️⃣ useEffect() Hook takes 2 arguments, 
    
    1. Function
    
      👉 Synchronous Function 
    
    2. Dependency
 
  
  # Dependency with useEffect() method ✅

    1️⃣ No dependency passed:
     
      useEffect(() => {

        //Runs on every Rendering

      });


    2️⃣ An empty Array:

      useEffect(() => {

        //Runs only on the first Render

      }, []);


    3️⃣ Props or state values:

      useEffect(() =>

        //Runs on the first Render

        //And that time passing dependencies variable's has been changed

      }, [variable,...]);

    


  Example : 1️⃣  Fetching Data From JSON file using useEffect() 📝

    > import { useEffect, useState } from 'react';

    const App = () => {
      const [data, setData] = useState();

      const funName = async () => {
          
      try{

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const result = await response.json();

        setData(result);

      }catch(error){
         
        console.log(error.message)
      }
       
    };


      useEffect(() => {
        funName();
      }, []);

      return (
        <div>
          {data &&
            data.map((obj, index) =>{
             return (
             <div key={index}>
             <h2>{obj.name}</h2>
             <h2>{obj.email}</h2>
             <h2>{obj.website}</h2>
             </div>
           );
         })}
        </div>
      );
      };

      export default App;

    
    👉 Here must be define "state && state.map()" Short Circuit condition otherwise throw ERROR,
     Cause fetching data is Asynchronous procedure, need some times.



  Example : 2️⃣ Add loading when not completed of fetching data  📝


    > import { useEffect, useState } from 'react';

      const App = () => {
        const [data, setData] = useState();
        const [isLoading, setIsLoading] = useState(true);

        const funName = async () => {

          try{

            const response = await fetch('https://jsonplaceholder.typicode.com/users');

            const result = await response.json();

            setIsLoading(false);
            setData(result);

          }catch(error){
            console.log(error.message);
          }
          
        };

        useEffect(() => {
          funName();
        }, []);

        const fetchData = data && data.map((obj, index) => {
          return (
            <div key={index}>
              <h2>{obj.name}</h2>
              <h2>{obj.email}</h2>
              <h2>{obj.website}</h2>
            </div>
          );
        });

        return (
          <>
            {isLoading ? <h2>Loading...</h2> : fetchData }
          </>
        );
      };

      export default App;



  Example : 3️⃣ Error Handling when fetching data  📝

    > import { useEffect, useState } from 'react';

    const App = () => {
      const [data, setData] = useState();
      const [isLoading, setIsLoading] = useState(true);
      const [error,setError] = useState(null);

      const funName = async () => {
        try {
          const response = await fetch('https://jsoplaceholder.typicode.com/users');

        const result = await response.json();

        setIsLoading(false);
        setData(result);

        } catch (error) {
          setError(error.message);
          setIsLoading(false);
          
        }
        
      };

      useEffect(() => {
        funName();
      }, []);

      const fetchData = data && data.map((obj, index) => {
        return (
          <div key={index}>
            <h2>{obj.name}</h2>
            <h2>{obj.email}</h2>
            <h2>{obj.website}</h2>
          </div>
        );
      });

      return (
        <>
          {error && <h2>Something was wrong...</h2>} 
          {isLoading ? <h2>Loading...</h2> : fetchData }
        </>
      );
    };

    export default App;



Chapter 20 : Create Custom Hook  ✌️

  Note: Create custom own Hook for used multiple times.

  👉 Create a file then write basic common codes & return useable data
  && we can import it and use it as like component.


  Example:  📝

   🟠 Create Custom Hook

    > import { useEffect, useState } from 'react';

    const CustomHook = (url) => {

      const [data, setData] = useState();
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState(null);

      const funName = async () => {

        try {
          const response = await fetch(url);

          const result = await response.json();

          console.log(result);
          setIsLoading(false);
          setData(result);

        } catch (error) {

          setError(error.message);
          setIsLoading(false);
        }
      };

      useEffect(() => {
        funName();

      }, [url] );

      return { data, isLoading, error };
    };

    export default CustomHook;


  🟠 Import custom Hook for used

   > import CustomHook from "./Child";

    const App = () => {

    1️⃣ const {data: data1,isLoading : loading,error : error1} = CustomHook("https://jsonplaceholder.typicode.com/users");

    2️⃣ const {data,isLoading,error} = CustomHook("https://jsonplaceholder.typicode.com/photos");

      const fetchData = data && data.map(
        (obj,index)=>{
          return (
            <div key={index}>
              <h2>{obj.title}</h2>
              <h2>{obj.url}</h2>
            </div>
          )
        }
      )
      return (
        <>
        {error && <h2>Something was wrong</h2>}
        {isLoading ?<h2>Loading...</h2> : fetchData }; 

        </>
      

      )
    }

    export default App;
   


  # File Structure  ✅

    1. components  FOLDER  =>  ( all components )
    2. container   FOLDER  =>  ( containers for components )
    3. services    FOLDER  =>  ( for Action & Reducer files )

      🟢 Action    FOLDER  =>  ( container for only Action functions )
      🟢 Reducer   FOLDER  =>  ( container for only Reducer functions )

    4. pages       FOLDER  =>  ( for create multiple web-pages )

      
    5. App.css     FILE
    6. App.js      FILE
    7. index.css   FILE
    8. index.css   FILE
    9. store.js    FILE

    
  😊 END 😊
  
*/
