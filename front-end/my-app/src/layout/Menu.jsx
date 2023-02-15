import React, { useState } from "react";
import CustmertImage from "./CustmerImage";
import CutmerEasyMode from "./CutmerEasyMode";
import Css from "./Menu.css"

const styles = {
    wrapper:{
        marginBottom: 10,
        padding : 15,
        borderRadius: 20,
        textAlign:"center",
        backgroundColor: "#FDF0D5",
        boxSizing: "content-box",
        width: "27%",
        height: "27%",
    },
    nameText:{   
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
    wrapper2:{
        marginBottom: 10,
        padding : 15,
        borderRadius: 20,
        textAlign:"center",
        backgroundColor: "#458627",
        boxSizing: "content-box",
        width: "45%",
        height: "95%",
    },
    nameText2:{   
        position: "relative",
        top: "200px",
        color: "black",
        fontSize: 60,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#FFFFFF",
    }

};

function Menu(props){
    
    const [,setState] = useState(0);
    
     function addCart(str)
     {
         props.imageMenu(str);

         if(props.sidecheck === 2 || props.sidecheck === 3){
            props.setcustmer(1);
          }
         props.setuse(props.id);
    }

    if(props.number === 1){
    return(
        <a className='btnSP' href='#' title='Shop Now' onClick={() => addCart(props.name)}>
        <span className='top'> 
        <span style={styles.nameText2}>{props.name}</span>
        <br></br><br></br>
        <span style={styles.nameText2}>{props.price}</span>
        </span>
        </a>
    );
    }
    else{
        return(
            <button className="menu" onClick={() => addCart(props.name)} style={styles.wrapper}>
              <span style={styles.nameText}>{props.name}</span>
             <br></br><br></br>
             <span style={styles.nameText}>{props.price}</span>
             </button>
         );
    }
}

export default Menu;
