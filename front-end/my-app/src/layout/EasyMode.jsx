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
  
function EasyMode(props) {

  const [selectMenu, setMenu] = useState('');
  const [check, setcheck] = useState('');
  const [sidecheck, setside] = useState(1);
  const [selectmenu, setmenu] = useState('없음');

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
  },[]);

    return (
      <div id="level">
       <Header/>
       <CutmerEasyMode checkfun={setcheck} check={check} imagemenu={selectMenu}/>
        <Sidebar imagemenu={setMenu} menu={selectMenu} sidecheck={sidecheck} setside={setside}/>
      <CommentList imagemenu={selectMenu} checkfun={setcheck} check={check} sidecheck={sidecheck} selectmenu={selectmenu}/> 
      </div>
    );
  }
  
  export default EasyMode;