/*

❤️❤️❤️ React Router ❤️❤️❤️

  Note: In React, routing multiple pages without refresh application,
   we need to used 3rd party Library as like ( React Router-Dom ).


#️⃣ Install React Router-Dom 6 : ✅

  > npm install react-router-dom


#️⃣ Set-up for Routing  ✅

  Syntax:  🧬

   import { BrowserRouter, Routes, Route } from "react-router-dom";

   return (
  
     <BrowserRouter>
       <Routes>
          <Route  path="/urlPath" element = {<Component />}/>
          ...
       </Routes>
     </BrowserRouter>

   );

  

#️⃣ "react-router-dom" library's Modules  ✅

  ⭐ "react-router-dom" library's every importing modules are Component
  so, Declare : <Component /> like that.

    ✒️ <BrowserRouter />, <Routes />, <Route />, <Link />, <NavLink />, <Navigate /> etc.

  👉 We can declare "react-router-dom" library's Components into any JSX Component file as like index.js or App.js or any other-Component file.



#️⃣ <BrowserRouter /> Component  ✅

  ⭐ "react-router-dom" library's every Components must be define inside,
    👉 <BrowserRouter>  react-router-dom's Component   </BrowserRouter> 

    🟢 Best Practice : Define it at index.js or App.js file

    👉 <BrowserRouter>...</BrowserRouter> is a Parent Component for all react-router-dom's Components.


#️⃣ <Routes />  Component  ✅

    👉 It's the Parent-Component of a group of <Route /> Components.


#️⃣ <Route path = "urlPath" element = { <Component />}  ✅

  🌿 path Attribute

  👉 urlPath with " / " that symbol, It's OPTIONAL.
   If we don't want to define then no need to declare it [ALWAYS],
  
   🟢 Best Practice : "NOT DECLARE"  [Generate Automatically]

   👉 When only define single urlPath that's time that procedure apply,
     when need to define multiple urlPath that's time must be used "/" symbol for separation.

      ✒️ single-urlPath => "singlePath"

      ✒️ multiple-urlPath => "parent/child/..."

      
  🎯 *  
    👉 means anything exists, redirect that url-path.


  🎯 urlPath/*  
    👉 means after that url-path anything exists, redirect that url-path.


  🎯 ../urlPath 
    👉 means back one-step from there, redirect that url-path.

    

  🌿 element Attribute

    👉 Inside element attribute we can define our own JSX <Component /> into curly braces { }.

    ⭐ When our submitted "/urlPath" in url-address, will be match with any one specific <Route/> component's path="/url-path" then only its element's our own JSX <Component /> have to be executed.


  ⭐ We can define multiple <Route/> Components for different url-path & JSX Components.


  Example:  📝

    import {BrowserRouter,Routes,Route} from 'react-router-dom';

    const App = () => {

     return (
  
      <div>
        <BrowserRouter>

          <Header />  

          <Routes>
            <Route  path="/" element = {<Home />}/>
            <Route  path="/js" element = {<JS />}/>
            <Route  path="/html" element = {<HTML />}/>
            <Route  path="/css" element = {<CSS />}/>
          </Routes>

          <Footer /> 

        </BrowserRouter>
      </div>       
    );
  }

    const Home = () =>{
      return <h2>It's home page</h2>
    }
    const JS = () =>{
      return <h2>It's javascript page</h2>
    }
    const HTML = () =>{
      return <h2>It's html page</h2>
    }
    const CSS = () =>{
      return <h2>It's css page</h2>
    }

  export default App;


  ⭐ <Header />, <Footer />,... that kinds of common our own JSX Components declare outside <Routes /> Component,
   for attach those Components with every <Route /> element's our own JSX Components.



#️⃣ <Link />  Component  ✅

  Note: "react-router-dom" library has another one Component { Link }, it's help to change url-path in url-address-bar.

  👉 We can used it instead of anchor tag <a/>


  👉 It works like <a> tag but not similar,
    cause <a/> tag directly redirect href="/urlPath" from there and refresh entire application.

  but,

   <Link /> component just change current url-path in url-address-bar when someone click its text,
   then controls goes to <BrowserRouter/> => <Routes/> => <Route/> and here firstly check which path="url-path" then redirect that element's component without refresh application.


  Syntax:  🧬
    
    import { Link } from "react-router-dom";

    return <div>
     
      <Link to="/urlPath"> Click Me </Link>

    </div>


    🌿 Inside "to" Attribute define for that <Link /> Component's urlPath.
      🎯 Same purpose used with <NavLink />, <Navigate /> Component.


  👉 We can define multiple <Link /> Components into any file for set-up multiple different url-path. 

  👉 We can also attach CSS styles ( inline,class,id,... ) with <Link /> component as same as like <a/> tag.


  Example:  📝

    🟠 Home.js

    import {Link} from "react-router-dom";

    const Home = () => {
      return <div>
     
        <Link to="about">About us</Link>
        <Link to="service">Services</Link>
        <Link to="/learn">Learn</Link>
            
        </div>
      }

    export default Home;


    🟠 App.js

    import {BrowserRouter,Routes,Route} from "react-router-dom"; 

    import About from "./components/About";
    import Home from "./components/Home";
    import Learn from "./components/learn";
    import Service from "./components/Service";

    const App = () => {

      return (     
        <div>
             
          <BrowserRouter>
            <Routes>
                
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="learn" element={<Learn />} />
              <Route path="service" element={<Service />} />

            </Routes>
          </BrowserRouter>

         </div>     
        );
      }

    export default App;



#️⃣ <NavLink />  ✅

  Note: "react-router-dom" library has another one Component { NavLink }, it's also help to change url-path in url-address-bar as like <Link /> Component,

  👉 but it's more efficient than <Link /> Component.

  Note: <NavLinK /> as same as like <Link /> Component but,
    🎯 <NavLink /> has a callBack_Function which return an Object, that Object has a property ( isActive ) that tell us specific url-path whether active or not.

  👉 "Object.isActive" property store Boolean value.

  👉 Base on "isActive" property, we can attach CSS styles or whatever we want.


  Syntax:  🧬

    import { NavLink } from 'react-router-dom';

    const NavList = () => {

      return (

        <NavLink to = "urlPath" className = { ( object ) =>{
          return (
            object.isActive ? "className" : undefined
          )
        }} > Click Me </NavLink>
      );
    }

    export default NavList;


  🌿 Understand [ In Background Something like that ]

    const NavLink = (callBack) =>{
      return callBack({isActive : true || false})
    }

    NavLink((object)=>{
      return object.isActive ? className : null;
    });

   
  Example:  📝

    import { NavLink } from "react-router-dom";

    let NavList = () =>{
      
      let activeClassName = "className";

      return (
        <div>

          <NavLink
            to="about"
            className={(object) =>
              object.isActive ? activeClassName : undefined
            }
          >
            About Us

          </NavLink>


          <NavLink
            to="service"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Service 

          </NavLink>
        </div>
      )
    }

    export default NavList;



#️⃣ Nested Route  ✅

  👉 Inside any <Route /> define one or many childs <Route />

  🟠 Without Any Child Route

    ✒️ <Route path = "urlPath" element= {<Component />}  />


  🟠 Contain Any Child Route

    ✒️ <Route path = "parent" element= {<ParentComponent />}  >

        <Route path="child" element={<ChildComponent /> } />

      </Route>
      
      👉 urlPath => /parent/child


    👉 Through that procedure we can define multiple Nested Route & how much deep we want.


  Syntax:  🧬
     
  🟠 App.js

    <BrowserRouter>
      <Routes>

        <Route path = "admin" element = {<ParentComponents />} >

        <Route path = "dashboard" element = { <ChildComponents />} />
          ...

        </Route>
        ...

      </Routes>
    </BrowserRouter>

    👉 urlPath => /admin/dashboard

    👉 We can redirect that urlPath from anywhere in our application,
      not only ParentComponent but also everywhere.
       

  🟠 In ParentComponent

    return (
      <div>
           
        <NavLink to="child" > Child </NavLink>

        ParentComponent's element

        <Outlet /> 🎯

      </div>

    );


    ⭐ "react-router-dom" has another one Component { Outlet }, it's help to decide where Child-Component's elements will be display into Parent-Component's container.

    👉 Without <Outlet /> Component declaration nothing happened.

    ⭐ Must be define <Outlet /> Component inside its Parent-Component only. 

    👉 Can define multiple <Outlet /> Components in its Parent-Component, if we want.


  Example:  📝

  🟠 App.js
      
    return (
      <div>

      <BrowserRouter>
        <Header/>
          <Routes>
                
            <Route path="/" element={<Home/>} />

            <Route path="learn" element={<Learn/>} >
              <Route path="html" element = {<h2>Learn HTML</h2>} />
            </Route>
              
          </Routes>

      </BrowserRouter>
      </div>
    );
      
    👉 urlPath => /learn/html


  🟠 Into Parent Component

    return (
      <div>
        <NavLink to="html" >HTML</NavLink>

        <h2> What should i need to learn ?</h2>

        <Outlet />
      </div> 
    );
        


#️⃣ Navigate  ✅

  Note: "react-router-dom" has another one Component { Navigate }, it's help to redirect current urlPath to another urlPath.


  Syntax:  🧬

    import { Navigate } from 'react-router-dom';

    { <Navigate to = "/redirectUrl/..." /> }


  👉 We can define <Navigate /> Component anywhere into JSX Code
    but, inside curly braces { }.


  Example: 1️⃣
     
    import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"; 
    
    return (
  
      <div>
        <BrowserRouter>
          <Routes>

            <Route  path="/" element = {<Home />}   />
            <Route  path="/html" element = {<Navigate to="/css" />}🎯 />
            <Route  path="/css" element = {<CSS />}   />

          </Routes>
        </BrowserRouter>

      </div>
    );

    
  Example: 2️⃣

    import { Navigate } from "react-router-dom";

    const Contract = () => {
      return (
        <div>
          {true : {<Navigate to = "login"/>} ? {<Navigate to = "signup"/>}}🎯
        </div>
      );
    };

    export default Contract;


    👉 Here, Contract page to redirect "/login" or "/signup" urlPath, base on condition.



#️⃣ useNavigate() Hook  ✅

  Note: "react-router-dom" has a Hook { useNavigate }, it's help to redirect current urlPath to another urlPath.

  ⭕ <Navigate to="/" />   => It's Component

  ⭕ useNavigate()   => It's Hook


  ⭐ It's mainly used above "return" Statement.


  Syntax :  🧬

    import {useNavigate} from "react-router-dom";

    const Component = () =>{

      const Navigate = useNavigate();  🎯 Return a method

        👉 Navigate("path");
        
      if(true){
        return Navigate("/");
      }else{
        return Navigate("/login")
      }

      return <>...</>
    }


    
#️⃣ useParams() Hook  ✅

  Note: "react-router-dom" has another one Hook { useParams }, its used to get parameter's values from url-address-bar.

  👉 "useParams()" Hook return a Object which stored all param's values that come from url-address-bar.

  ⭐ For get param values must be define "/:paramName/:..." with related path="/url-path" into <Route /> Component.


  Syntax:  🧬

    🟠 App.js

    <BrowserRouter>
      <Routes>

        <Route  path='/' element = {<Home/>}/>
          
        <Route  path='urlPath/:paramName/:...' element = {<AnyComponent />}/>

      </Routes>
    </BrowserRouter>


    👉 We can define multiple param links for get multiple param values.

      Example : 📝

        Path = "urlPath/:param1/:param2/:..."

    ⭐ That's kind of path must be define at the END,
        cause when we submitted any-Route in url-address-bar, it think that value for itself.
      

  🟠 AnyComponent.js 

    Syntax:  🧬
       
      import { useParams } from 'react-router-dom';

      let funName = () =>{

        let object = useParams();

        return(
          <>
            <h2> Your 1st param value is : { object.param1 } <h2>

            <h2> Your 1st param value is : { object.param2 } <h2>
            ...

          </>
        )
      }

      export default funName;


    👉 That Object's properties name must be SAME with defined param name in path="/url-path" into <Route /> Component.


  Example:  📝

  🟠 App.js

    return (
      <div>

       <BrowserRouter>
        <Routes>

          <Route  path="/" element = {<Home/>}  />
          <Route  path="user/:userId/:userName" element = {<User />}  />

        </Routes>
       </BrowserRouter>
        
      </div>

    );

  
  🟠 into User.js

    import { useParams } from 'react-router-dom';

      let User = () =>{

        let object = useParams();

        return(
          <>
           <h2> User Id : { object.userId } <h2>
           <h2> User Name : { object.userName } <h2>
            
          </>
        );
      }

    export default User;


  
#️⃣ 404 Error Page  ✅

  Syntax:  🧬

    <Route path = "*" element = { <ErrorComponent />}
    
    
  Example :  📝

    <BrowserRouter>
      <Routes>
        
        <Route  path='/' element = {<Home />}      />
        <Route  path='/html' element = {<HTML />}   />
        <Route  path='/css' element = {<CSS/>}     />

        <Route path = "*"  element = {<ErrorComponent />}   />
        
      </Routes>

    </BrowserRouter>


  🎯 *  
  👉 means anything exists, redirect that url-path.

  💥 If above any path didn't match then trigger ErrorComponent.

  ⭐ It's kind of path must be define at the END,
    cause when we submitted any-Route in url-address-bar, it think that value for itself.


😊 END 😊

*/