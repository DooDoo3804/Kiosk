import logo from './logo.svg';
import './App.css';

import CommentList from './layout/CommentList';
import Sidebar from './layout/sidebarlist'
import Menu from './layout/Menulist'
import NotificationList from './chapter_06/NotificationList';
import CustmerList from './layout/CustmerList';
const styles = {
  wrapper:{
      margin: 0,
      padding: 40,
      display: "flex",
      flexDirection:"row",
      border: "1px solid grey",
      borderRadius: 0,
  },
};

function App() {
  return (
    <div>
    
     <CustmerList/>

    {/* <div style={styles.wrapper}>
      <Sidebar/>
      <Menu/>
    </div>
    <CommentList/> */}
    </div>
  );
}

export default App;
