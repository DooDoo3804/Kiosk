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
        origin: ['http://localhost:3000', 'http://70.12.246.87:3000'],
        megthods: ["GET", "POST"]
    }
});

let interval;

io.on("connection", (socket) =>{
    console.log("접속");

    console.log("Before msg1");
    socket.on("client_msg1", (data) =>{
        console.log(data);
        console.log(1);
        console.log(`클라이언트에서 보낸 메시지 수신: ${data}`);
        socket.broadcast.emit('event_name', data);
        
    }); 

    console.log("Before msg2");
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