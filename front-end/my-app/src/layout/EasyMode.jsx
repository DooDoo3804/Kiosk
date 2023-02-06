import React from 'react';
import CommentList from './CommentList';
import Sidebar from './sidebarlist'
import Menu from './Menulist'
import CustmerList from './CustmerList';
import Header from './Header'
import CutmerEasyMode from './CutmerEasyMode';

const styles = {
    wrapper:{
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection:"row",
        borderRadius: 0,
    },
  };
  

function EasyMode() {
    return (
      <div>
       <Header/>
       <CutmerEasyMode/>
        <Sidebar/>
      <CommentList/> 
      </div>
  
    );
  }
  
  export default EasyMode;