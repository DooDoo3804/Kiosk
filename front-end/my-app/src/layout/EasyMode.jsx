import React , {useState, useEffect }from 'react';
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
 
  useEffect(() => {       
          if (props.height === 1) {
            document.getElementById("level").style.transform = "translateY(0px)"
            document.getElementById("level").style.transition = "transform 2s" 
          } else if (props.height === 2) {
            document.getElementById("level").style.transform = "translateY(300px)"
            document.getElementById("level").style.transition = "transform 2s"
          } else {
            document.getElementById("level").style.transform = "translateY(600px)"
            document.getElementById("level").style.transition = "transform 2s"
          }  
  },[props.height]);

    return (
      <div id="level">
       <Header/>
       <CutmerEasyMode checkfun={setcheck} check={check} imagemenu={selectMenu}/>
        <Sidebar imagemenu={setMenu}/>
      <CommentList imagemenu={selectMenu} checkfun={setcheck} check={check}/> 
      </div>
  
    );
  }
  
  export default EasyMode;