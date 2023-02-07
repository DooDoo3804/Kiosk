import './App.css';
import EasyMode from './layout/EasyMode';
import CustmerList from './layout/CustmerList';
import EmployeeService from './EmployeeService';
import NomalMode from './layout/NormalMode';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Navigate } from "react-router-dom"
import  socketIOClient from 'socket.io-client';


function App() {
  const [items, setItems] = useState([])
//    const [hasMore, setHasMore] = useState(true)
   const [page, setPage] = useState(1)
 
   useEffect(() => {
     fetchData(page)
   }, [page])
  
   const fetchData = (page) => {
     const newItems = ['치즈버거', '콜라', '치즈스틱']
  
//      for (let i = 0; i < 100; i++) {
//        newItems.push(i)
//      }
  
//      if (page === 100) {
//        setHasMore(false)
//     }
 
    setItems([...items, ...newItems])
  }
 
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    const clientHeight = document.documentElement.clientHeight
 
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1)
    }
  }
 
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])
 
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}
 
export default App
