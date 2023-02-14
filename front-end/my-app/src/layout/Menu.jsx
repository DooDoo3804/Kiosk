import React, { useState } from "react";
import CustmertImage from "./CustmerImage";
import CutmerEasyMode from "./CutmerEasyMode";


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
};

function Menu(props){
    
     function addCart(str)
     {
         props.imageMenu(str);

         if(props.sidecheck === 2 || props.sidechekc === 3){
            props.setcustmer(1);
          }
         props.setuse(props.id);
    }

    return(
       <button className="menu" onClick={() => addCart(props.name)} style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
        <br></br><br></br>
        <span style={styles.nameText}>{props.price}</span>
        </button>
    );
}

export default Menu;
