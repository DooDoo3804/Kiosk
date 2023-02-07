import React, { useState } from "react";
import CustmertImage from "./CustmerImage";
import CutmerEasyMode from "./CutmerEasyMode";


const styles = {
    wrapper:{
        marginBottom: 10,
        padding : 15,
        border: "1px solid grey",
        borderRadius: 20,
        textAlign:"center",
        backgroundColor: "#FDF0D5",
        boxSizing: "content-box",
        width: "28%",
        height: "28%",
       
    },
    nameText:{   
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
};



function Menu(props){

    const [select, setState] = useState('');

    function addCart(str)
    {
        props.imageMenu(str);
        console.log(str);
        setState({});
    }

    return(
       <button onClick={() => addCart(props.name)} style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
        <br></br>
        <span style={styles.nameText}>{props.price}</span>
        </button>
    );
}

export default Menu;
