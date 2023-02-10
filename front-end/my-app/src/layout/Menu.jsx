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

    const [,setState] = useState(0);
    
     function addCart(str)
     {
         props.imageMenu(str);
         props.setuse(props.id);
         setState({});
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
