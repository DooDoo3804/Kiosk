import React from "react";
import { useRef, useState } from "react";
import CommentList from "./CommentList"

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
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText:{   
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
};

function Menu(props)
{
    return(
       <div style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
         <span style={styles.nameText}>{props.price}</span>
        </div>
    );
}

export default Menu;