import React, {userState, useState, useEffect} from "react";
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

    let keyitems = 0;

    return(
        <div style={styles.wrapper}>
        {Jsonfle[props.selectbutton]["name"].map((comment) => {
            return (<Ingredient key={keyitems++} name={comment} selectmenu={props.selectmenu} setmenu={props.setmenu} />);
          })}
       </div>
    );
}


export default CustmerSide;