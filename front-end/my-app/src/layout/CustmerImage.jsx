import React from "react";
import Ingredient from "./Ingredient";
import Jsonfle from "../db/single.json";

const styles = {
    wrapper:{
        display: "flex",
        flexDirection:"row",
        marginBottom: 10,
        padding: 0,
        border: "1px solid grey",
        borderRadius: 20,
        flex:"auto",
    },
    foodBox:{
        marginBottom: 10,
        padding: 40,
        border: "1px solid grey",
        borderRadius: 20, 
        width: "70%",
    },

    sideBox:{
        border: "1px solid grey",
        borderRadius: 20,
        width: "40%",
    },
};



function CustmertImage(props){

    return(
       <div style={styles.wrapper}>
        <div style={styles.foodBox}>
     
          {
          Jsonfle[0]['ingrdent'].map((comment) => {
                return (<Ingredient key={comment.id} name={comment}/>);
            })}
       </div>

      <div style={styles.sideBox}>
       <Ingredient name={Jsonfle[0]['sider']}/>
       <Ingredient name={Jsonfle[0]["drink"]}/>
       </div>
       
       </div>
    );
}


export default CustmertImage;