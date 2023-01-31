import React from "react";


const styles = {
    wrapper:{
        marginBottom: 10,
        padding: 40,
        border: "1px solid grey",
        borderRadius: 20,
    },
    imageBox:{   

        border: "1px solid grey",
        borderRadius: 20,
    },
    menuBox:{
        border: "1px solid grey",
        borderRadius: 20,
    },
};



function Ingredient(props){
    return(
       <div style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
        </div>
    );
}

export default Ingredient;