/*

 ❤️❤️❤️ Redux ❤️❤️❤️

  👉 Redux used for state management.


  #️⃣ What is Redux?  ✅

    Note: Redux is a library for managing and updating application state.

     In other words,change any state from one place but used that changed state anywhere in our entire application.


  #️⃣ Redux Recycle  ✅
   
    ♻️ UI => Action => Reducer(New State) => Store => Reducer(Current State) 



  #️⃣ Redux Main Topics  ✅

    1. Action  📌
      
      👉 What to do?

    2. Reducer  📌
      
      👉 How to do?

    3. Store  📌
      
      👉 It's an Object which contains all states of our application & provide those states in our entire application.

  
  
  #️⃣ Action  ✅

    Note: Action is pure JavaScript Object which have a property called "type".

    Note: Actions only tell what to do, but they don't tell how to do.

    Note: We can create Action Object by using pure JavaScript function.

    Note: Action Object also can contain data which comes from our JSX Component as arguments.
  
 
  #️⃣ Reducer  ✅

    Note: Reducer is pure JavaScript function which takes two arguments,

      1️⃣ The Current State 
 
      2️⃣ An Action Object 
 
    👉 return a new state.

  

  #️⃣ Store ✅

    Note: It's an Object which contains all states of our application & provide those states in our entire application.

    ⭐ One application can contain only one Redux's Store Object.

    ⭐ One Redux's Store Object can contain only one Reducer Function. 


  #️⃣ Redux Principles  ✅

    1️. All states of our application are stored as an Object inside a single Store.

    2️. State is Read-Only

     👉 The only way to change the state is to dispatch an Action Object.

    3️. Immutability, One-way data flow & predictability of outcome.
     
    4️. Can change any state by using Reducer Function.
    
    5️. With same arguments always return same data, haven't side effect.


 
  #️⃣ Install redux & react-redux ✅

    > npm install redux react-redux

    👉 redux & react-redux are different 2 libraries.


    🟢 redux's modules

      1. combineReducers({ reducerFunction1,... });
      
      2. createStore( a_combinedReducerFunction );


    🟢 react-redux's modules

      1. <Provider store={Store}>...</Provider>

      2. useSelector(callBack_Current_State);

      3. useDispatch();  🌿 return a method

    👉 "react-redux" library's all modules used for built communication between React & Redux.

    

  #️⃣ Create Action Object  ✅

    Note: For management purpose, At first create a Folder with a file where we can define multiple functions which them return an Action Object.

    Note: Then import that file in our own Component, now we can call those Action Object creator_Function from any Function or useEffect().

    Note: We can also insert values in any Action Object through that Action Object creator_Function's arguments when called.


    👉 An Action Object can contain 2 things,
     
     🟢 type  [REQUIREMENT]

     🟢 data which pass as arguments from Component [OPTIONAL]


    ⭐ That Action Object creator_Function called by using "useDispatch()" Hook from any Component. 


  Syntax : 🧬

    const actionCreatorFunc = (parameter1,...) => {

      return {
        type : "actionName",
        payload1 : parameter1,
        ...
      }
    }


  Example: 📝

    const increNumber = (data) => {
       
      return {
        type: "increment",
        payload : data
      }
    }

    const decreNumber = (data) => {
      
      return{
        type: "decrement",
        payload: data

      }        
    }

    export {incNumber,decNumber};


    🌿
      1️⃣ "type" property for contain any Action's Name,
        we can't modify that property's Name  [REQUIREMENT]

      2️⃣ We can define anyName instead of "payload",
        It's OPTIONAL, If its Component passed any values.


  👉 Can create multiple Action Object creator_Functions in a single file or separate them in multiple files.
  


  #️⃣ Create Reducer Function ✅

    Note: For management purpose, At first create a Folder with a file where we can define multiple Reducer functions which are define what should those Action to do,
     finally return a new state.


    👉 Every Reducer function takes two arguments,

      🟢 Initial_State or Current_State

      🟢 An Action Object


    👉 Action Object at first initialized then comes here so, no need to take any action for that.

    ⭐ In a Reducer Function we can check multiple any Action Object's "type" property by using "switch" statement,
     then create a new state for that action & return that state.

    👉 For handle multiple same kinds of Action Objects, One Reducer Function is enough.
     But we can define multiple Reducer Functions in our Application.


    Example: 📝
     
      const initialValue = 0;

      const FirstReducer = (state= initialValue, action) => {
        
        switch(action.type){

          case "increment" : return state + action.data;
          case "decrement" : return state - action.data;

          default : return state;
        }
      }

      export default FirstReducer;


    🟢 Best Practice : Define default_value with "state" parameter. [Avoid Unexpected ERROR]

    👉 Both parameter's Names anything we can define.


    👉 Can create multiple Reducer Functions in a single file or separate them in multiple files.



  #️⃣ Create Root_Reducer file  ✅

    🌿 combineReducers()

    Note: We could be define multiple Reducer Functions in our application but Redux's Store Object can contain only one Reducer Function,
     So, we need to combine multiple Reducer Functions in a single Reducer Function that's why create that file.

    Note: "redux" library has a method { combineReducers }, it's help to combine multiple Reducer Functions in a single Reducer Function.

    👉 "combineReducers()" method takes an Object as an argument & inside that Object can define multiple Reducer Functions in key:value pairs,
     then "combineReducers()" method combine them & return a single Reducer Function.

    
    Example:  📝

      import {combineReducers} from "redux";

      import FirstReducer from "./FirstReducer";

      const rootReducer = combineReducers({
        
        FirstReducer : FirstReducer,
        SecondReducer,
        ...     
      });

      export default rootReducer;

                                      
  
  #️⃣ Create Store Object  ✅

    🌿 createStore()

    Note: Store Object contains all states of our application & provide those states in our entire application.

    Note: "redux" library has a method { createStore }, it's help to create a Redux's Store Object. 

    Note: Inside that method simply pass a combineReducer Function as an argument
     👉 It's return a Redux's Store Object.


    Example:  📝

      import rootReducers from "./services/Reducer/RootReducer";

      import {createStore} from "redux";

      const store = createStore(rootReducers)

      export default store;



  #️⃣ Create <Provider/> Component into index.js file  ✅

    🌿 <Provider> ... </Provider>

    Note: "react-redux" library has a Component { Provider }, it's help to provide a Redux's Store Object everywhere in our entire application.

    ⭐ Inside <Provider> Component's Attribute, we can send that Redux's Store Object as like props argument.

    👉 <App /> Component must be declare inside <Provider></Provider> Component. 

    
    Example:  📝

      import { Provider } from "react-redux";
      import Store from "./store";

      ReactDOM.render(

        <Provider store={Store}>
          <App />
        </Provider>
        
        , document.getElementById("root"));


    👉 Now, we can access that Redux's Store Object's all states from anywhere in our entire application.

  

  #️⃣ Get Current State ✅

    🌿 useSelector()

    Note: "react-redux" library has a Hook { useSelector }, it's help to get current-state from Redux's Store Object through its Reducer_Function.

    👉 "useSelector()" Hook takes a callBack_Function which have a parameter that is an Object,
     through that parameter Object, we can call any Reducer_Function which current state we want to get.


    Syntax:  🧬
     
      import { useSelector } from "react-redux";

      const functionName = (parameter) => {
        return parameter.reducerFunction;  🎯 call its reducerFunction()
      }

      let currentState = useSelector ( functionName ) ;

    
    Example:  📝

      import { useSelector } from "react-redux";

      let newState = useSelector(state => state.FirstReducer );

    👉 Now, we can used that newState variable anywhere in that Component.



  #️⃣ Call Action Object Creator_Function For new state from a Function or useEffect() Hook ✅

    Note: "react-redux" library has another one Hook { useDispatch }, it's used to called Action Object's Creator_Function for create new Action Object.

    👉 "useDispatch()" Hook return a method which takes a Action Object's Creator_Function as an argument.

    👉 That function must be called into another Function or Condition or useEffect() Hook 👈 otherwise go down in looping.
      [cause we are calling that function from there, so again & again calling]


    Syntax:  🧬
 
      import { useDispatch } from "react-redux";
      import actionFunctionCall from "./services/Action/actionFunctionCall";

      let dispatch = useDispatch();  

      const funName = () =>{
        return dispatch(actionFunctionCall())
      }

      return (
        <button onclick = {funName} > Click Me </button>
      );

    
    Example:  📝

      import { useSelector ,useDispatch } from 'react-redux';

      import { incNumber,decNumber } from '../services/Action/action';

      const CountNumber = () => {

        let myState = useSelector(state => state.FirstReducer);    

        let dispatch = useDispatch();

        const funName = ()=> {
          return  dispatch(incNumber(5));
        }

        return (
          <div>
            
            <button onClick={funName}>+</button>
            <input type="text" name="text" id="text"  value={myState} readOnly/>

            <button onClick={() => {
                return(
                  dispatch(decNumber(5))
                )
             }}> - </button>

          </div>
        )
      }

      export default CountNumber;



  #️⃣ Recap  ✅
    
    🎯 At first, Called any Action Object's Creator_Function for create new Action Object from any Function or Condition or useEffect() Hook by using "useDispatch()" Hook's method,


    🎯 then, from that Action Object Creator_Function will be get a new Action Object which can contain "type" & "payload",
    then that Action Object comes in our Component again.


    🎯 In our Component, here we declared "useSelector()" Hook for get current state from any specific Reducer_Function(),
     So called that Reducer_Function() with that created Action_Object as an argument from "useSelector()" Hook's callBack_Function by using Object parameter.


    🎯 In Reducer_Function, at first check which Action_Object come as a parameter by using switch statement ( case "action.type" ) then create new state for that Action_Object and return it.


    🎯 then that new state goes to RootReducer file for combine through "combineReducers()" Hook and return a combined Reducer_Function,


    🎯 then that combined single Reducer_Function goes to store_File for stored through "createStore()" Hook and return updated a Redux's Store Object,


    🎯 then that updated Redux's Store Object comes to index.js file for provide that Store Object in our entire application by using <Provider></Provider> Component,


    🎯 Finally, we will get current state from that "useSelector()" Hook's callBack_Function,
      now, we can use that state anywhere in that component.


    👉 Anywhere in our entire application, we can get any Action_Object's current state just using "useSelector()" Hook ANYTIME.



  #️⃣ Asynchronous Middleware (redux-thunk)  ✅

    👉 "redux" library has another one method { applyMiddleware } which help to called any Middleware (as like redux-thunk, sage etc.)

      > import { applyMiddleware } from "redux";

    ⭐ "applyMiddleware()" method must be define inside "createStore()" method after  RootReducer define, as an another argument.
    

    Example :  📝

      import { createStore, applyMiddleware } from "redux";

      import RootReducer from "./service/Reducer/RootReducer";

      const Store = createStore(
        RootReducer,
        applyMiddleware(middlewareFunc_1,middlewareFunc_2,...)
      );

      export default Store;

    
    👉 We can define multiple Middleware-Function inside applyMiddleware() method separate by comma(,)

   
    
  🌿 Recycle  ✅

    ♻️ UI => Action => middleware,... => Reducer(New State) => Store => Reducer(Current State)

    

  🌿 Middleware Example :  ✅

    Example :  📝

      import { applyMiddleware, createStore } from "redux";
      import RootReducer from "./service/Reducer/RootReducer";

      const firstMiddleware = () => {
        return (next) => {
          return (action) => {
            console.log("first Middleware");
            return next(action);
          };
        };
      };

      const secondMiddleware = () => {
        return (next) => {
          return (action) => {
            console.log("second Middleware");
            return next(action);
          };
        };
      };

      const Store = createStore(
        RootReducer,
        applyMiddleware(firstMiddleware, secondMiddleware)
      );

      export default Store;


      👉 OutPut : 

        first Middleware
        second Middleware
        RootReducer

        
    ⭐ Same Procedure Apply with "react-thunk".

    
  🌿 "react-thunk" 

    👉 "redux-thunk" is a third-party library which used for create Action-Object Asynchronously through middleware.

      ⭕ redux => Create Action-Object Synchronously

       👉 Only return a plain-object 

      ⭕ redux-thunk => Create Action-Object Asynchronously

        👉 return a function

        🍃 It possible,
         cause "redux" doesn't care what's innerFunction return,
         care about what's outerFunction return
          & it return plain-Object in "redux-thunk" also. 😉
    

  🌿 Install Redux-Thunk  ✅

    > npm install redux-thunk

    > import thunkMiddleware from "redux-thunk";

    > const Store = createStore(RootReducer,applyMiddleware(thunkMiddleware));
	
	
    Syntax :  🧬  (Create An Action-Object Asynchronously)

      const anyFunction = (null ❗ provide-data) =>{

        return async (function1,function2){
          
          await // fetch-data, if we want

          function1(Action-Object ❗ Creator-Function);
        }
      }

      ⭕ function1 => It's a CallBack_Function which takes a plain-Action_Object as an argument

        🍃 Directly define plain_Action_Object or,

        🍃 Define plain_Action_Object's Creator_Function.


      ⭕ function2 => For get Current State through "Reducer" property.


    Example :  📝

      const ActionHandler = () => {

        return async (dispatch, getState) => {

          try {
            const currentState = getState().Reducer;

            const response = await fetch("/state");

            const result = await response.json();

            dispatch({

              type: "FETCH_DATA",
              payload: { ...currentState, newState: result }
            });

          } catch (error) {
            console.log(error.message);
          }
        };
      };

      export default ActionHandler;


    👉 We can define multiple "dispatch()" method chaining into a Redux-Thunk Middleware.

      🌿 One By One Execute.

    👉 Instead of "dispatch" & "getState", we can define anyName.

  
  #️⃣ Loading, Fetching & Error Handling  ✅

    Example :  📝

    ⭕ Action.js

      const ActionHandler = () => {

        return async (dispatch, getState) => {

          dispatch({ type: "REQUEST" }); 🎯

          try {

            const response = await fetch("/state");
            const result = await response.json();

            dispatch({ type: "SUCCESS", payload: result });  🎯

          } catch (error) {
            dispatch({ type: "ERROR", error: error.message });  🎯
          }
        };
      };

      export default ActionHandler;


    ⭕ Reducer.js

      const initialState = {
        loading: false,
        state: [],
        error: null
      };

      const Reducer = (state = initialState, action) => {
        switch (action.type) {

          case "REQUEST":
            return {
              ...state,
              loading: true,
              error: null
            };

          case "SUCCESS":
            return {
              ...state,
              loading: false,
              item: action.payload
            };

          case "ERROR":
            return {
              ...state,
              loading: false,
              error: action.error
            };

          default:
            return state;
        }
      };

      export default Reducer;
       
      
    ⭕ App.js

      const currentState = useSelector(state => state.Reducer);

      const renderFunction = ()=>{

        if(currentState.loading){
          return <Loading />
        }else{
          return <Display state={currentState} />
        }
      }
      

  
  #️⃣ If we want to attach Redux-Devtool-Extension with our Redux  ✅

    Note: We can used Redux-Devtool-Extension for seeing our states visually.

    👉 For that need to install "redux-devtools-extension" third-party library in our Application.


    🌿 Install Redux-Devtool-Extension

      > npm install redux-devtools-extension

      > import { composeWithDevTools } from "redux-devtools-extension";

      
    Example :  📝 

      import { applyMiddleware, createStore } from "redux";
      import thunk from "redux-thunk";
      import { composeWithDevTools } from "redux-devtools-extension";

      import RootReducer from "./service/Reducer/RootReducer";

      const Store = createStore(
        RootReducer,
        composeWithDevTools(applyMiddleware(thunk)) ⭐
      );

      export default Store;

    
  👉 Must be install "Redux DevTool" Extension in our Chrome or FireFox Browser or
   used inspect => Redux.



  #️⃣ "redux-logger" is an another coolest third-party library which used for displaying Current-State into console.

    🌿 Install Redux-Logger

      > npm install redux-logger

      > import reduxLogger from "redux-logger";

    👉 Define it into applyMiddleware() method & as a last middleware.


    Example :  📝

      import { applyMiddleware, createStore } from "redux";
      import thunk from "redux-thunk";
      import logger from "redux-logger"

      import RootReducer from "./service/Reducer/RootReducer";

      const Store = createStore(
        RootReducer,
        (applyMiddleware(thunk,logger)) 🎯
      );

      export default Store;





  #️⃣ File Structure  ✅

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