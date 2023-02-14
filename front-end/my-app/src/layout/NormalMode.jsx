import React , {useState,  useEffect}from 'react';
import CommentList from './CommentList';
import Sidebar from './sidebarlist2'
import Header from './Header'
import CustmerList from './CustmerList';

const styles = {
    wrapper:{
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection:"row",
        borderRadius: 0,
    },
  };
  


function NormalMode(props) {


  const [selectMenu, setMenu] = useState('');
  const [check, setcheck] = useState('');
  const [custmercheck, setcustmer] = useState(false);
  const [sidecheck, setside] = useState(1);
  const [selectmenu, setmenu] = useState('없음');

  useEffect(() => {       
          if (props.height === 1) {
            // console.log(1)
            document.getElementById("level").style.transform = "translateY(0px)"
            document.getElementById("level").style.transition = "transform 2s" 
          } else if (props.height === 2) {
            // console.log(2)
            document.getElementById("level").style.transform = "translateY(300px)"
            document.getElementById("level").style.transition = "transform 2s"
          } else {
            // console.log(3)
            document.getElementById("level").style.transform = "translateY(600px)"
            document.getElementById("level").style.transition = "transform 2s"
          }  
},[props.height]);


    return (
      <div id="level">
      <Header stye={{border:"1px"}}/>
      {!custmercheck && <Sidebar imagemenu={setMenu} setcustmer={setcustmer} sidecheck={sidecheck} setside={setside}/>}
      {custmercheck && <CustmerList imagemenu={selectMenu} checkfun={setcheck} check={check} setcustmer={setcustmer} custmercheck={custmercheck} setmenu={setmenu} selectmenu={selectmenu}/>}
      <CommentList imagemenu={selectMenu} checkfun={setcheck} check={check} selectmenu={selectmenu} /> 
      </div>
  
    );
  }
  
  export default NormalMode;