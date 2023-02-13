import './App.css';
import React, {userState, useState, useEffect} from "react";
import io from 'socket.io-client';
import { Link, Route, BrowserRouter , Routes } from "react-router-dom";
import Choose from './layout/Choose';
import axios from 'axios'
import Delay from './layout/delay';
import EasyMode from './layout/EasyMode';
import NomalMode from './layout/NormalMode';



function Callaxios({name, type, Height}){

axios.post('http://3.36.49.220:8081/inburger/menu/user', {
  name: {name},
  isEasy: {type},
  height: {Height},
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
  const [Height, setHeightt] = useState();
  const [username, setusername] = useState();
  
  const socket = io("http://3.36.49.220:4001");
  socket.connect();
  socket.on('react', (data) => {
    console.log(data)
    settype(data["mode"]);
    setHeightt(data["height"]);
    setusername(data["name"]);
    Callaxios({type, username, Height});
    console.log(`${data}`, 1)
  });



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
