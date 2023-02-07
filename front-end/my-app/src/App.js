import './App.css';
import EasyMode from './layout/EasyMode';
import CustmerList from './layout/CustmerList';
import EmployeeService from './EmployeeService';
import NomalMode from './layout/NormalMode';
import React from 'react';
import io from 'socket.io-client';
import { Link, Route, BrowserRouter , Routes } from "react-router-dom";
import Choose from './layout/Choose';

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

