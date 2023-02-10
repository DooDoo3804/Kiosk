import React from "react";


const styles = {
    nameTextS:{   
        border: 0,
        width:"300px",
        height:"100%",
        marginTop: 10,
    },
    menuBoxS:{
       padding: 0,
       margin:0,
       border: 0,
       backgroundColor: "#FFFFFF",
       width: "100%",
    } 
};

function Ingredient(props){
    return(
        <button style={styles.menuBoxS}>
         <img style={styles.nameTextS} src={process.env.PUBLIC_URL + `./images/${props.name}.png`} alt={props.name}/>
         </button>
    );
}

export default Ingredient;