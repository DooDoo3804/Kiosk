import React from "react";

const styles = {
    wrapper:{
        margin: 0,
        padding: 5,
        display: "flex",
        flexDirection:"row",
        border: "1px solid grey",
        borderRadius: 0,
        height: 150,
        justifyContent: "center",
    },
    nameText:{
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        lineHeight : 4.5,
        
    },
};

function sidebar(props){
    return(
       <div style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
        </div>
    );
}


export default sidebar;