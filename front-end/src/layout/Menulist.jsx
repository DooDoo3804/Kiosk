import React from "react";
import Comment from "./Menu";
import Jsonfle from "../db/date.json"

  const styles = {
    wrapper:{
        margin: 0,
        padding: 40,
        display: "flex",
        flexDirection:"row",
        flexWrap: "wrap",
        width: "75%",
        border: "1px solid grey",
        borderRadius: 0,
        justifyContent: "space-between",
    },
};
function  MenuList(props)
{
    return (
      <div style={styles.wrapper}>
        {Jsonfle.map((comment) => {
            return (<Comment key={comment.id} name={comment.name}/>);
          })}
        
      </div>  
    );
}


export default MenuList;