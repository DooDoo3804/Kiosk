import React from "react";


const styles = {
    wrapper:{
        marginBottom: 10,
        padding: 0,
        border: 0,
        height: "100px",
        borderRadius: 20,
    },
    nameText:{   
        border: 0,
        width:"200px",
        height:"100%",
        marginTop: 10,
    },
    menuBox:{
       padding: 0,
       margin:0,
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