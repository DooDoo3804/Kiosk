import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EasyMode from './layout/EasyMode';
import NomalMode from './layout/NormalMode';
import Choose from './layout/Choose';
import reportWebVitals from './reportWebVitals';
import { Link, Route, BrowserRouter ,Routes } from "react-router-dom";
import Delay from './layout/delay';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
      <Routes>
        <Route path="/Easy" element={ <EasyMode /> }></Route>
        <Route path="/" element={ <NomalMode /> }></Route>
        <Route path="/Choose" element={ <Choose /> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
