console.log("hello world")

const express = require("express");
const http = require("http");
const sockeIo = require("socket.io");


const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);

const server = http.createServer(app);

const io = sockeIo(server, {
    cors: {
<<<<<<< HEAD:front-end/my-app/socket-io-server/app.js
        origin: ['http://localhost:3000', 'http://70.12.246.87:3000'],
=======
        origin: "http://localhost:3000",
>>>>>>> cf16215b7a86ea90229e90243ac78c8a5e628216:front-end/socket-io-server/app.js
        megthods: ["GET", "POST"]
    }
});

let interval;

io.on("connection", (socket) =>{
<<<<<<< HEAD:front-end/my-app/socket-io-server/app.js
    console.log("New client connected");

    socket.on('login', function(data){
        socket.name = data.name;
        socket.userid = data.userid;
    });
=======
    console.log("들어옴");
    if(interval){
        clearInterval(interval);
    }
>>>>>>> cf16215b7a86ea90229e90243ac78c8a5e628216:front-end/socket-io-server/app.js

    socket.on("incompany", (data) =>{
        console.log(`클라이언트에서 보낸 메시지 수신: ${data}`);
        socket.broadcast.emit('event_name', data);
        
    }); 

    socket.on("client_msg2", (data) =>{
        console.log(`클라이언트에서 보낸 메시지 수신: ${data}`);
        
        socket.broadcast.emit('event_name', data);
    }); 

    socket.on("disconnect", () => {
        console.log("나감");
        clearInterval(interval);
    });
});


server.listen(port, ()=> console.log(`Listening on port ${port}`));
