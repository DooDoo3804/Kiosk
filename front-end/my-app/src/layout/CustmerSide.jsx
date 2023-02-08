import React from "react";
import Jsonfle from "../db/date2.json"
import Ingredient from "./Ingredient"


const styles = {
    wrapper:{
        marginLeft: 10,
        padding: 0,
        border: "1px solid grey",
        borderRadius: 20,
        width: "20%",
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

function CustmerSide(props){
    return(
        <div style={styles.wrapper}>
        {Jsonfle.map((comment) => {
            return (<Ingredient key={comment.id} name={comment.name}/>);
          })}
       </div>
    );
}


export default CustmerSide;