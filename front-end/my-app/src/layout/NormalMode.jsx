import React from 'react';
import CommentList from './CommentList';
import Sidebar from './sidebarlist2'
import Menu from './Menulist2'
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

       <div style={styles.wrapper}>
        <Sidebar/>
        <Menu number={1}/>
      </div>
      <CommentList/> 
      </div>
  
    );
  }
  
  export default EasyMode;