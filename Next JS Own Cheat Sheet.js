/*
❤️❤️❤️ Next JS ❤️❤️❤️

Chapter 1 : What is Next JS ?   ✌️

  #️⃣ What is Next JS ?

   👉 The React JS framework for production.

   👉 Next Js is our own environment with a lot of inbuilt features to make it easy for us to build super fast web apps. (Ex. File Based Routing)
  
    
  #️⃣ Why Next JS ? 

   👉 The big reason to choose Next.js is its SEO efficiency.

   👉 Next.js websites are super-fast,easy to scan and provide a great user experience and that's why Google will favor them above others and rank them higher.

   👉 It is using "Server Side Rendering" (SSR) and at the same time it can be also a great "Static Site Generator" (SSG).

   👉 File Based Routing.

   👉 Support for CSS Modules(CSS for each pages).

   👉 Pre-rendering(better SEO).

   👉 Image Optimization.

   👉 Typescript Support, Fast Refresh.

   👉 Deployment & production build system.




Chapter 2 : Create Next JS App  ✌️

  🌿 npx create-next-app app_name


  ⭕ Starting Next JS Application

   🌿 npm run dev ❗ yarn dev




Chapter 3 : Next JS File Structure  ✌️

  ⭕ .next 

   👉 .next file is help to execute our application and it's also create when our execution will be starting.


  ⭕ node_modules

   👉 It's our application storage which store all installed third-party modules and provide them in our application. 


  📂 pages 

    📁 api 

     👉 That folder is for server side rendering.


    ⭕ _app.js

     👉 It's our application's main entry point where from execution will be starting.


    ⭕ index.js

     👉 It's the only file which connected with _app.js file so it's existence mandatory.

     👉 Our all own main modules can attach in that file.


  📂 public 

   👉 That folder for providing public resources.


  📂 styles
   
     ⭕ globals.css
   
      👉 That file for globally applying CSS styles.


     ⭕ Home.module.css
   
      👉 That file for applying CSS styles in individual component.

   

  ⭕ .eslintrc.json 

   👉 eslintrc.json file to define the configuration structure for our application.


  ⭕ .gitignore 

   👉 Into that file, we can declare folder or file-name which them are ignore by git.


  ⭕ next.config.js 

   👉 That file is used for applying "reactStrictMode = true" and also can define our application's configuration.


  ⭕ package.js 

   👉 That file is heart for our project,
   here define all dependencies projectName, version everything in JSON format.


  ⭕ package-lock.json  ✅

   👉 package-lock.json file is help to control dependencies's version.


  ⭕ README.md  ✅

   👉 That file contain information about our project. When we submitted our project on github that is become documentation about our project for everyone.

 


Chapter 4 : How Next JS Code Works Under The Hook   ✌️

  1️⃣ 1st control package.json file,

  2️⃣ Then control goes to _app.js file,

  3️⃣ Here rendering Component & that Component is index.js file

  4️⃣ Then _app.js's MyApp function also export and displaying on browser in HTML format.




Chapter 5 : File Based Routing  ✌️

  ⭐ index.js  =>  http://localhost:3000/


  👉 When a file is added to the pages folder in our application, by default all the files becomes available as a route.


  📂 pages/home.js

   const Home = () => {
      return (
         <h1>It's home page</h1>
      );
   }
   export default Home;

   🌿 Route => http://localhost:3000/home



  📂 pages/home/index.js

   const Home = () => {
      return (
         <h1>It's home page</h1>
      );
   }
   export default Home;

   🌿 Route => http://localhost:3000/home





Chapter 6 : Nested File Based Routing  ✌️

  📂 pages/home/something.js

   const Home = () => {
      return (
         <h1>It's home page</h1>
      );
   }
   export default Home;

   🌿 Route => http://localhost:3000/home/something


   👉 In That folder we can define multiple files, same ways every-files route automatically.




Chapter 7 : Dynamic Routing  ✌️

  📂 pages/blog/[blogNumber].js

   import {useRouter} from "next/router"

   const blogNumber = () => {
      const router = useRouter();
      const getBlogNumber = router.query.blogNumber;

      return (
        <h1>Displaying {getBlogNumber}</h1>
      )
   }
   export default blogNumber;


  🌿 Route => http://localhost:3000/blog/anything




Chapter 8 : Create Navbar In Next JS  ✌️

  ⭕ index.js 

  import Link from "next/link";

   const index = () => {
      return (
         <>
            <ul>
               <li >
                  <Link href="/home" >Home</Link>
               </li>
               <li>
                  <Link href="/about" >About</Link>
               </li>
               <li>
                  <Link href="/blog" >Blog</Link>
               </li>
               <li>
                  <Link href="/contact" >Contact</Link>
               </li>
            </ul>
         </>
      );
   };
   export default index;


   👉 Instead of <a> tag just used <Link></Link> component, remain all procedure almost same. 





Chapter 9 : Redirect Link In Next JS  ✌️

  ⭕ home.js

   import { useRouter } from "next/router";
   import { useEffect } from "react";

   const Home = () => {
      const router = useRouter();

      useEffect(() => {
         setTimeout(() => {
            router.push("/blog");
         }, 5000);
      }, []);

      return (
         <>
            <h1 onClick={()=>{router.push("/about")}}>It's home page</h1>
         </>
      );
   };
   export default Home;




Chapter 10 : Creating Custom 404 Error Page  ✌️

  🌿 Next JS has default 404 error page, but we can override it if we want.


  📂 public/404.js

   const error = () => {
      return (
         <div>File Not Found</div>
      )
   }
   export default error;


   👉 In that 404.js file we can declare JSX and CSS whatever we want.





Chapter 11 : Own Component  ✌️

  👉 In root directory, we can create component or any-name folder & inside that folder can create our own component files as like React JS. 





Chapter 12 : Global CSS  ✌️

  📂  styles/globals.css file used for applying styles anywhere in our entire application. 

  👉 Must be import that file into _app.js file.

   🌿 import '../styles/globals.css'


  👉 And just declare that file's selectors with any JSX tags in any component.


   Example :  📝

   <div className="layout-style" id="text-color">
   
        Contents...
      
   </div>




Chapter 13 : Component-Level CSS  ✌️

  👉 Next JS supports CSS modules,
     so we can create CSS modules for specific components and apply with them.


  ⭐ File-name must be [name].module.css naming convention &  

  ⭐ We can declare CSS module files anywhere in our application. 

  ⭐ In a component, at first import specific CSS module then through that object can attach specific selector with any JSX tag.


  Example :  📝

  ⭕ any_specific.js
  
   import anyName from "../styles/home.module.css"


   <div className={anyName.className} id={anyName.idName}>

     Contents...

   </div>

    



Chapter 14 : Inline CSS  ✌️ 

  👉 That procedure same as like React JS.

  Example :  📝

   <div style = {{color : "red", fontSize : "20px"}}>
  
      Container...
   
   </div>




Chapter 15 : Image Optimization  ✌️ 

  👉 We can used <img> tag in Next.js but instead of <img> tag if we used Next.js's component "Image",
  it's good for SEO and many other things.

  👉 If we store images in public folder that directly we can access but if we put those images in another folder then at first import those images then access (same as React JS)


  ⭕ Import 

   🌿  import Image from 'next/image'


  ⭕ Declaration 

   🌿  <Import src={path} width="*px" height = "*px">

   👉 width & height must be specific.


   Example :  📝

   import Image from 'next/image'

   <Image src = "images/myPic.png" width= "500px" height= "500px" alt= "img" />






Chapter 16 : Head Component & SEO  ✌️ 

  ⭕ any_specific.js 

   import Head from "next/head";

   const index = () => {
      return (
         <>
            <Head>
               <meta name="description" content="for practice" />
               <title>Practice Page</title>
            </Head>

            <h1>Practice Page</h1>
         </>
      );
   };
   export default index;


   👉 In <Head/> component everything we can declare whatever we can declare in HTML file's <head> tag.






Chapter 17 : getStaticProps()  ✌️

  👉 Through that method, we can fetching all data at build time.

  👉 We can also used useEffect & useState hooks for fetching data as like React JS,
   but getStaticProps() is more efficient and also good for SEO.


   Example :  📝

   export const getStaticProps = async () => {

	   const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	   const result = await response.json();

	   return {
		  props: {
			  result,
		  }
	   };
   };

   const about = ({ result }) => {
      return (
         <>
            {result.map((value) => {
               return (
                  <div key={value.id}>
                     <h1>{value.title}</h1>
                     <p>{value.body}</p>
                  </div>
               );
            })}
         </>
      );
   };

   export default about;


   ⭐ getStaticProps() return a Object & that Object has a property "props" which store our fetching data.






Chapter 18 :  getStaticPaths() for Rest API & Dynamic Route   ✌️

  👉 getStaticPaths() used fetching path & uses dynamic routes.


  Example :  📝

  export const getStaticPaths = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");

	const result = await response.json();

	const paths = result.map((curElem) => {
		return {
			params: {
				blogNumber: curElem.id.toString()
			}
		};
	});

	return {
		paths,
		fallback: false
	};
  };

   export const getStaticProps = async (context) => {
      const id = context.params.blogNumber;

      const response = await fetch(
         `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      const result = await response.json();

      return {
         props: {
            result
         }
      };
   };

   const blogNumber = ({ result }) => {
      return (
         <>
            <p>{result.id}</p>
            <h1>{result.title}</h1>
            <p>{result.body}</p>
         </>
      );
   };

   export default blogNumber;





Chapter 19 :  Deploy Next JS On Vercel  ✌️

  1️⃣ Create Account On Vercel

  2️⃣ > npm i -g vercel  (Install Vercel CLI)

  3️⃣ > vercel


😊 END 😊
*/