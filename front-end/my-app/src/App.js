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




function App() {

  const [type, settype] = useState(0);
  const [Height, setHeightt] = useState(0);
  const [username, setusername] = useState('');
  const [callfunction, setcall] = useState(false);
  const [start, setstart] = useState(false);
 
  setstart(!start);

  useEffect(()=>
  {
    console.log("ffff");
    axios.post('http://3.36.49.220:8081/inburger/menu/user', {
      name: username,
      age: type,
      is_easy: Height
    },{	
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
    .catch((err)=> {console.log('errot!')
    console.log(err)});
  }, [callfunction])

  useEffect(()=>
  {
    const socket = socketIOClient("http://3.36.49.220:4001");
    socket.on('react', (data) => {

      settype(data['mode']);
      setHeightt(data['height']);
      setusername(data['name']);
      setcall(!callfunction);
    
    });
  }, [start]);
  

  // socket.emit('react', 1);

  console.log(type);
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
