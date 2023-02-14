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

<<<<<<< HEAD
  const [type, settype] = useState(2);
  const [Height, setHeightt] = useState(0);
  const [username, setusername] = useState('');
  
=======
  const [type, settype] = useState(['', 0, 0]);
  const [callfunction, setcall] = useState(false);
  const [start, setstart] = useState(false);


>>>>>>> 04c5c3dee9a40d9db9d4553a5cfef9aad0601474
  useEffect(()=>
  {
    const socket = socketIOClient("http://3.36.49.220:4001");
    socket.on('react', (data) => {

      settype([data['name'], data['height'], data['mode']])
      console.log("ffff");
      axios.post('http://3.36.49.220:8081/inburger/menu/user', {
        name: data['name'],
        height: data['height'],
        isEasy: data['mode']
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
      .catch((err)=> {
      console.log('errot!')
      console.log(err)});

  });

},[start]);
  
<<<<<<< HEAD
  console.log(type);
   if(type === 0){
=======

  // socket.emit('react', 1);

   if(type[2] === 0){
>>>>>>> 04c5c3dee9a40d9db9d4553a5cfef9aad0601474
     return (
       <Delay/>
     );
   }
   else if(type[2] === 1){
       return(
       <EasyMode />
       );

   }
   else if(type[2] === 2)
   {
       return(
       <NomalMode />
       );
   }
  console.log("ssafy");
}


export default App;
