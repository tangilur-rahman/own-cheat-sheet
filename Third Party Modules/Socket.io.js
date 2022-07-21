/*
❤️❤️❤️ Socket.io ❤️❤️❤️

#️⃣ What is web socket.io & how it works?  ✌️

  🌿 Socket.io library has two parts

    ⭕ Client-side library for managing browser.

    ⭕ Node JS library for managing server-side.


  🌿 Socket.io is a library for

    ⭕ Real-time Communication.

    ⭕ Bidirectional Communication.

    ⭕ Between browser-server communication.

  

#️⃣ Setup Socket.io
  
  🟢 Server.js

    👉 create express server
    const express = require("express");
    const app = express();

  ⭐ Socket.io work with http-module

    👉 create http server
    const http = require("http"); 
    const httpServer = http.createServer(app);

    👉 import socket modules
    const { Server } = require("socket.io");
    
    👉 create socket server
    const io = new Server(httpServer,{
      cors : {
        origin : "http://localhost:3000"
      }
    });

    👉 pre-define event & every new socket events create inside it's callback function
    io.on("connection", (socket) => {

      👉 create id for every connection
      console.log(`User Connected: ${socket.id}`);  

      👉 create a new room
      socket.on("join_room", (data) => {
        socket.join(data);                         
      });

      👉 receive data from client
      socket.on("send_message", (data) => {

        👉 to send data only specific room
        socket.to(data.room).emit("receive_message", data);  
        
        👉 to broadcast everyone.
        socket.broadcast.emit("receive_message",data);

      });

        👉 pre-define event & when disconnect any client
        socket.on("disconnect",()=>{
          console.log("User disconnected",socket.id)
        })
    });

    
    httpServer.listen(4000, () => {
      console.log("SERVER IS RUNNING AT 4000");
    });



  🟢 Client.js
  
    import io from "socket.io-client";
    import { useEffect, useState } from "react";

    const socket = io.connect("http://localhost:4000");

    const Client = () => {

      //Room State
      const [room, setRoom] = useState("");

      // Messages States
      const [message, setMessage] = useState("");
      const [messageReceived, setMessageReceived] = useState("");

      const joinRoom = () => {
        if (room !== "") {
          socket.emit("join_room", room);
        }
      };

      const sendMessage = () => {
        socket.emit("send_message", { message, room });
      };

      useEffect(() => {
        socket.on("receive_message", (data) => {
          setMessageReceived(data.message);
        });
      }, [socket]);

      return (
        <div className="App">
          <input
            placeholder="Room Number..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}> Join Room</button>
          <input
            placeholder="Message..."
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button onClick={sendMessage}> Send Message</button>
          <h1> Message:</h1>
          {messageReceived}
        </div>
      );
    }

    export default Client;

😊END😊
*/