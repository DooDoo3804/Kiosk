import React , {useState}from 'react';
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
  

function NormalMode() {

  const [selectMenu, setMenu] = useState('');
  const [check, setcheck] = useState('');
  const [custmercheck, setcustmer] = useState(false);
  const [sidecheck, setside] = useState(true);

    return (
      <div className=''>
      <Header stye={{border:"1px"}}/>
      {!custmercheck && <Sidebar imagemenu={setMenu} setcustmer={setcustmer} setside={setside}/>}
      {custmercheck && <CustmerList imagemenu={selectMenu} checkfun={setcheck} check={check} setcustmer={setcustmer} custmercheck={custmercheck} />}
      <CommentList imagemenu={selectMenu} checkfun={setcheck} check={check}/> 
      </div>
  
    );
  }
  
  export default NormalMode;