import React from "react";


const styles = {
    wrapper:{
        marginBottom: 10,
        padding: 0,
        border: 0,
        height: "100px",
        borderRadius: 20,
        position: "relative",
    },
    nameText:{   
        position: "relative",
        top: "120px",
        border: 0,
        width:"200px",
        height:"100%",
        margin: "-20.5px",
        transform: "rotateX(50deg)",
    },
    menuBox:{
       padding: 0,
       margin: 0,
       border: 0,
       backgroundColor: "#FFFFFF",
       width: "100%",
    } 
};

function Ingredient(props){
    return(
        <button style={styles.menuBox}>
         <img style={styles.nameText} src={process.env.PUBLIC_URL + `./images/${props.name}.png`} alt={props.name}/>
         </button>
    );
}

export default Ingredient;