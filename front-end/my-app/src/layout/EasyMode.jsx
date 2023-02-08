import React , {useState}from 'react';
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

  const [selectMenu, setMenu] = useState('');
  const [check, setcheck] = useState('');

    return (
      <div>
       <Header/>
       <CutmerEasyMode checkfun={setcheck} check={check} imagemenu={selectMenu}/>
        <Sidebar imagemenu={setMenu}/>
      <CommentList imagemenu={selectMenu} checkfun={setcheck} check={check}/> 
      </div>
  
    );
  }
  
  export default EasyMode;