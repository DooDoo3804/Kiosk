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
import Jsonfle1 from "./db/recommend.json"




function App() {

  const [type, settype] = useState(2);
  const [height, setheight] = useState(2);
  const [name, setname] = useState('');


  useEffect(()=>
  {
    const socket = socketIOClient("http://3.36.49.220:4001");
    socket.on('react', (data) => {

      settype([data['name'], data['height'], data['mode']])
      setheight(data['height']);
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
        }).then((response) => {
          console.log(response.data);
          localStorage.setItem('reacommend', JSON.stringify(response.data));
        })
      .catch((err)=> {
      console.log('errot!')
      console.log(err)});

  });

  }, []);

   if(type === 0){
     return (
       <Delay height={height}/>
     );
   }
   else if(type === 1){
       return(
       <EasyMode height={height} settype={settype}/>
       );
   }
   else if(type === 2)
   {
       return(
       <NomalMode height={height} settype={settype} type={type}/>
       );
   }

}

export default App;
