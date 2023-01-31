import React from "react";

const styles = {
    wrapper:{
        margin: 0,
        padding: 40,
        display: "flex",
        flexDirection:"row",
        width: "15%",
        border: "1px solid grey",
        borderRadius: 0,
    },
    nameText:{
        alignitems: "center",
        color: "black",
        fontSize:16,
        fontWeight: "bold",      
    },
};

function Comment(props){
    return(
       <div style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
        </div>
    );
}


export default Comment;