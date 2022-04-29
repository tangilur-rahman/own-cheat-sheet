/*
❤️❤️❤️ Socket.io ❤️❤️❤️

  🌿 Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

  
  🌿 Setup Socket.io
  

  🟠 Server.js

    const express = require("express");
    const app = express();

    const cors = require("cors");
    app.use(cors());


    const http = require("http"); 

      👉 Socket.io work with http module
    
    const httpServer = http.createServer(app);


    const { Server } = require("socket.io");
    
    const io = new Server(httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log(`User Connected: ${socket.id}`);  // get id

      socket.on("join_room", (data) => {
        socket.join(data);                          // insert room key
      });


      socket.on("send_message", (data) => {

        socket.to(data.room).emit("receive_message", data);  
        
          👉 send specific room

        socket.broadcast.emit("receive_message",data);

          👉 to broadcast everyone.

      });

    });

    httpServer.listen(4000, () => {
      console.log("SERVER IS RUNNING AT 4000");
    });



  🟠 Client.js
  
    import io from "socket.io-client";
    import { useEffect, useState } from "react";

    const socket = io.connect("http://localhost:4000");

    function App() {

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

    export default App;
*/