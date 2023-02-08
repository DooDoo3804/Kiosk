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
        origin: ['http://localhost:3000', 'http://3.36.49.220:3000'],
        megthods: ["GET", "POST"]
    }
});

let interval;

io.on("connection", (socket) =>{
    console.log("접속");

    socket.on("pi", (data) =>{
        console.log(data);
        console.log(`파이에서 들어온 메시지 수신: ${data}`);
        socket.broadcast.emit('react', data);
    }); 

    socket.on("react", (data) =>{
        console.log(`리액트에서 들어온 메시지 수신: ${data}`);
        socket.broadcast.emit('pi', data);
    }); 

    console.log("나가기 직전")
    socket.on("disconnect", () => {
        console.log("나감");
        clearInterval(interval);
    });
});


server.listen(port, ()=> console.log(`Listening on port ${port}`));
