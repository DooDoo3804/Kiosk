import logo from './logo.svg';
import './App.css';

import CommentList from './layout/CommentList';
import Sidebar from './layout/sidebarlist'
import Menu from './layout/Menulist'


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
    
    <div style={styles.wrapper}>
      <Sidebar/>
      <Menu/>
    </div>
    <CommentList/>
    </div>
  );
}

export default App;
