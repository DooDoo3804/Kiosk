import React, { useEffect } from "react";


const styles = {
    nameText:{   
        border: 0,
        width:"180px",
        height:"100%",
        marginTop: 30,
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
        <button onClick={()=>{ props.setmenu(props.name); props.setcheck(1)}}style={styles.menuBox}>
         <img style={styles.nameText} src={process.env.PUBLIC_URL + `./images/${props.name}.png`} alt={props.name}/>
        </button>
    );
}

export default Ingredient;