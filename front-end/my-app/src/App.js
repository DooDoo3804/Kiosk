import './App.css';
import EasyMode from './layout/EasyMode';
import NomalMode from './layout/NormalMode';
<<<<<<< HEAD
import React from 'react';
import io from 'socket.io-client';
import { Link, Route, BrowserRouter , Routes } from "react-router-dom";
import Choose from './layout/Choose';
import axios from 'axios'
=======
import React, { useState, useEffect } from 'react';
import  socketIOClient from 'socket.io-client';
const ENDPOINT = "http://70.12.246.124:8080/admin/users/1";
>>>>>>> cf16215b7a86ea90229e90243ac78c8a5e628216

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';


const socket = io("http://70.12.246.87:4001");
socket.connect();
socket.on('event_name', (data) => {
  console.log(data)
})

// axios.get('http://70.12.246.124:8081/inburger/user', {
// 	headers: {
//     'Access-Control-Allow-origin' : 'http://70.12.246.124:8081',
//     'Access-Control-Allow-Credentials': true
// 	},
// 	proxy: {
// 	  host: '70.12.246.87',
// 	  port: 3000
// 	}
// 	}).then(function (response) {
// 		console.log('response is : ' + response.data[0]["name"]);
// 	}).catch(function (error) {
// 		if (error.response) {
// 		  console.log(error.response.headers);
// 		} 
// 		else if (error.request) {
// 	      console.log(error.request);
// 		} 
// 		else {
// 		  console.log(error.message);
// 		}
// 	console.log(error.config);
// });


axios.post('http://70.12.246.124:8081/inburger/user', {
  name: '1',
  isEasy: 1,
  height: 100,
},{	
  headers: {
      'Access-Control-Allow-origin' : 'http://70.12.246.124:8081',
      'Access-Control-Allow-Credentials': true
  	},
  	proxy: {
  	  host: '70.12.246.87',
  	  port: 3000
  	}}).then((response) => {console.log(response.data);})
.catch((response)=> console.log('errot!'));


function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={ <EasyMode /> }></Route>
        <Route path="/Choose" element={ <Choose /> }></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;

