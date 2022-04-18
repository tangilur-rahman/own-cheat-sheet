/*

Title: Uptime Monitoring Application
Description : A restful API to monitor up or down time of user defined links
Author : Tangilur Rahman
Data : 6/3/2022

*/

// import dependency
const http = require('http');
const handleReqRes = require('./Helper/reqResHandler');

const port = 4000;

const createServer = () => {
  const server = http.createServer(handleReqRes);

  server.listen(port, () => {
    console.log(`The server running is port : ${port}`);
  });
};

createServer();
