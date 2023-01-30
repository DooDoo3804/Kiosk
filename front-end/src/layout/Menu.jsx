import React from "react";
import styled from "styled-components"


const styles = {
    wrapper:{
        marginBottom: 10,
        padding: 40,
        border: "1px solid grey",
        borderRadius: 20,
        width: "19%"
    },
    nameText:{   
        color: "black",
        fontSize:16,
        fontWeight: "bold",
    },
};

function Menu(props){
    return(
       <div style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
        </div>
    );
}

export default Menu;