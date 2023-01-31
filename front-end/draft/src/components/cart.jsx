import React from "react";

const styles = {
    wrapper:{
        margin: 0,
        padding: 40,
        border: "1px solid grey",
        borderRadius: 0,
        display: "flex",
    },
    nameText:{
        alignitems: "center",
        color: "black",
        fontSize:16,
        fontWeight: "bold",
        marginLeft: "20%",
        width: "100px",

    }
};


function Comment(props){
    return(
       <div style={styles.wrapper}>
         <div style={styles.nameText}>{props.menu}</div>
         <div style={styles.nameText}>{props.count}</div>
         <div style={styles.nameText}>{props.price}</div>
        </div>
    );
}


export default Comment;