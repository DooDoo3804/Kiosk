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
        origin: "http://localhost:3000",
        megthods: ["GET", "POST"]
    }
});

let interval;

io.on("connection", (socket) =>{
    console.log("들어옴");
    if(interval){
        clearInterval(interval);
    }

    socket.on("incompany", (data) =>{
        console.log(`클라이언트에서 보낸 메시지 수신: ${data}`);
    });

    socket.on("disconnect", () => {
        console.log("나감");
        clearInterval(interval);
    });
});


server.listen(port, ()=> console.log(`Listening on port ${port}`));
