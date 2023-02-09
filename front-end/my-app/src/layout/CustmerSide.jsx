import React from "react";
import Jsonfle from "../db/sidebutton.json"
import Ingredient from "./Ingredient"


const styles = {
    wrapper:{
        marginLeft: 0,
        padding: 0,
        border: "1px solid grey",
        borderRadius: 20,
        width: "40%",
        height: "100%",
    },
};

function CustmerSide(props){
    return(
        <div style={styles.wrapper}>
        {Jsonfle[props.selectbutton]["name"].map((comment) => {
            return (<Ingredient key={comment.id} name={comment}/>);
          })}
       </div>
    );
}


export default CustmerSide;