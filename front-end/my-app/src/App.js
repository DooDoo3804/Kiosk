import './App.css';
import React, {userState, useState, useEffect} from "react";
import io from 'socket.io-client';
import { Link, Route, BrowserRouter , Routes } from "react-router-dom";
import Choose from './layout/Choose';
import axios from 'axios'
import Delay from './layout/delay';
import EasyMode from './layout/EasyMode';
import NomalMode from './layout/NormalMode';
import socketIOClient from "socket.io-client";


let count = 0;

function App() {

  const [type, settype] = useState([]);
  const [callfunction, setcall] = useState(false);
  const [start, setstart] = useState(false);


  if(count === 0)
  {
    count = count + 1;
    setstart(!start);
  }
  useEffect(()=>
  {
    const socket = socketIOClient("http://3.36.49.220:4001");
    socket.on('react', (data) => {

      settype([data['mode'], data['height'], data['name']]);

      console.log(typeof(data['name']), typeof(data['mode']), typeof(data['height']));

      var sendData = JSON.stringify({
        "name": data['name'],
        "age": data['mode'],
        "is_easy":data['height']
    });

      console.log("ffff");
      axios.post('http://3.36.49.220:8081/inburger/menu/user', {sendData},{	
        headers: {
            'Access-Control-Allow-origin' : 'http://3.36.49.220:8081',
            'Access-Control-Allow-Credentials': true,
            'Content-Type' : 'application/json'
          },
          proxy: {
            host: '3.36.49.220',
            port: 3000
          },
        }).then((response) => {console.log(response.data);})
      .catch((err)=> {console.log('errot!')});

  });

},[start]);
  

  // socket.emit('react', 1);

   if(type === 0){
     return (
       <Delay/>
     );
   }
   else if(type === 1){
       return(
       <EasyMode />
       );

   }
   else if(type === 2)
   {
       return(
       <NomalMode />
       );
   }
  console.log("ssafy");
}


export default App;
