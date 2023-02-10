import './App.css';
import React, {userState, useState, useEffect} from "react";
import io from 'socket.io-client';
import { Link, Route, BrowserRouter , Routes } from "react-router-dom";
import Choose from './layout/Choose';
import axios from 'axios'
import Delay from './layout/delay';
import EasyMode from './layout/EasyMode';
import NomalMode from './layout/NormalMode';

// axios.post('http://70.12.246.124:8081/inburger/user', {
//   name: '1',
//   isEasy: 1,
//   height: 100,
// },{	
//   headers: {
//       'Access-Control-Allow-origin' : 'http://70.12.246.124:8081',
//       'Access-Control-Allow-Credentials': true
//   	},
//   	proxy: {
//   	  host: '70.12.246.87',
//   	  port: 3000
//   	}}).then((response) => {console.log(response.data);})
// .catch((response)=> console.log('errot!'));




function App() {

  
// const [type, settype] = useState(0);

// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

//   const socket = io("http://3.36.49.220:4001");
//   socket.connect();
//   socket.on('pi', (data) => {
//     console.log(data)
//     settype(data);
//   });
//  socket.emit('react', 1) //끝날때 


  <NomalMode/>



  // if(type === 0){
  //   return (
  //     <div>
  //     <Delay/>
  //     </div>
  //   );
  // }
  // else if(type === 1){
  //     return(
  //     <EasyMode />
  //     );

  // }
  // else if(type === 2)
  // {
  //     return(
  //     <NomalMode />
  //     );
  // }
}

export default App;
