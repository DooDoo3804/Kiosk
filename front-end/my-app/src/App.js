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

function Callaxios({type, username, Height}){

axios.post('http://3.36.49.220:8081/inburger/menu/user', {
  name: {username},
  age: {type},
  is_easy: {Height},
},{	
  headers: {
      'Access-Control-Allow-origin' : 'http://3.36.49.220:8081',
      'Access-Control-Allow-Credentials': true
  	},
  	proxy: {
  	  host: '70.12.246.87',
  	  port: 3000
  	}}).then((response) => {console.log(response.data);})
.catch((response)=> console.log('errot!'));
}


function App() {

  const [type, settype] = useState(0);
  const [Height, setHeightt] = useState(0);
  const [username, setusername] = useState('');
  
  useEffect(()=>
  {
    const socket = socketIOClient("http://3.36.49.220:4001");
    socket.on('react', (data) => {
      console.log(data)
      console.log(data["mode"])
      console.log(data["height"])
      console.log(data["name"])
      settype(data["mode"]);
      setHeightt(data["height"]);
      setusername(data["name"]);
      Callaxios({type, username, Height});
    });
  }, [])
  

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
