import React from "react";


const styles = {

    nameTextS:{   
        position: "relative",
        top: "50px",
        border: 0,
        width:"200px",
        height:"100%",
        margin: "-23.5px",
        transform: "rotateX(50deg)",
    },
    menuBoxS:{
       padding: 0,
       margin: 0,
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