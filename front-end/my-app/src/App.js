import './App.css';
import EasyMode from './layout/EasyMode';
import CustmerList from './layout/CustmerList';
import EmployeeService from './EmployeeService';
import NomalMode from './layout/NormalMode';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Navigate } from "react-router-dom"
import  socketIOClient from 'socket.io-client';
const ENDPOINT = "http://70.12.246.124:8080/admin/users/1";



function App() {
 
 
 // let answer = 1;

  return (
    <div>
    <EasyMode/>
    </div>
  );

}

export default App;
