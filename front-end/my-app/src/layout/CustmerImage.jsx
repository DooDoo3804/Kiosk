import React from "react";
import Ingredient from "./Ingredient2";
import Ingredient3 from "./Ingredient3";
import Jsonfle from "../db/menusetting.json";

//-1: 빼기 1: 넣기//

const styles = {
    wrapper:{
        display: "flex",
        flexDirection:"row",
        padding: 0,
        border: "1px solid grey",
    },
    foodBox:{
        padding: 0,
        margin: 0,
        border: "1px solid grey",
        borderRadius: 20, 
        width: "70%",
    },
    sideBox:{
        border: "1px solid grey",
        width: "50%",
    },
};
function CustmertImage(props){

    return(
       <div style={styles.wrapper}>
        <div style={styles.foodBox}>
     
          {
          Jsonfle[props.menuname]['ingrdent'].map((comment) => {
                return (<Ingredient key={comment.id} name={comment}/>);
            })}
       </div>
      <div style={styles.sideBox}>
       <Ingredient3 name={Jsonfle[props.menuname]['sider']}/>
       <Ingredient3 name={Jsonfle[props.menuname]["drink"]}/>
       </div>
    </div>
    );
}


export default CustmertImage;