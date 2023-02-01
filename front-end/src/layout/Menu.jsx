import React from "react";


const styles = {
    wrapper:{
        marginBottom: 20,
        padding: 50,
        border: "1px solid grey",
        borderRadius: 20,
        width: 130,
        height: 120,
        textAlign:"center",
        
        
    },
    nameText:{   
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        
    },
};

function Menu(props){
    return(
       <div style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
         <br></br><br></br>
         <span style={styles.nameText}>{props.price}</span>
        </div>
    );
}

export default Menu;