import React from "react";
import Menulist from "./Menulist";

const styles = {
    wrapper:{
        margin: 0,
        padding: 5,
        display: "flex",
        flexDirection:"row",
        borderBottom: "1px solid grey",
        borderRadius: 0,
        height: 150,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#FDF0D5",
    },
    nameText:{
        color: "black",
        fontSize: 35,
        fontWeight: "bold",
        lineHeight : 4.5,
    },
};

function sidebar(props){
    // console.log(props)
    return(
       <button onClick={()=>setCount(count = props)} style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
        </button>
    );
}


export default sidebar;