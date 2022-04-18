/*
❤️❤️❤️ React-Toastify ❤️❤️❤️

 🌿 React-Toastify is a third-party library for Displaying Notification.


 🌿 Procedure : 

   > npm install react-toastify

   > import { ToastContainer, toast } from "react-toastify";
   > import "react-toastify/dist/ReactToastify.css";


  🟢 By Using Direct Component : 

    <ToastContainer

      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      ...

    />

or 

  🟢 By Using toast Object  ✨

    toast.success("🦄 Wow so easy!", {

			position: "top-center",
			theme: "colored",
			autoClose: 2000			
      ...

    });


  👉 "toast" Object has multiple methods which are take 2 arguments,
  
    1️⃣ String [message]

    2️⃣ Object which contain Setting for that notification. 
    

  ⭐ <ToastContainer /> Component can declare anywhere into any Component.


❤️ NPM : https://www.npmjs.com/package/react-toastify

❤️ For Setting : https://fkhadra.github.io/react-toastify/introduction


 😊END😊

*/