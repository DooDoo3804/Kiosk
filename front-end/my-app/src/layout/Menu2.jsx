import React, { useState } from "react";

const styles = {
    wrapper:{
        marginBottom: 10,
        padding : 10,
        border: 0,
        borderRadius: 20,
        textAlign:"center",
        backgroundColor: "#FDF0D5",
        boxSizing: "content-box",
        width: "26%",
        height: "26%",
    },
    nameText:{   
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    img:{
        width: "80%",
        height: "60%",
    }
};


function Menu(props){

    const [,setState] = useState(0);
    
     function addCart(str)
     {
         props.imageMenu(str);
         props.setuse(props.id);
         props.setcustmer(1);
         props.setside(0);
         console.log(props.name);
         setState({});
    }

    return(
       <button className="menu" onClick={() => addCart(props.name)} style={styles.wrapper}>
         <span style={styles.nameText}>{props.name}</span>
        <br></br>
        <img style={styles.img} src={process.env.PUBLIC_URL + `./images/${props.name}.png`} alt={props.name}/>
        <br></br>
        <span style={styles.nameText}>{props.price}</span>
        </button>
    );
}

export default Menu;