import React from "react";
import Comment from "./Menu2";
import Jsonfle1 from "../db/date.json"
import Jsonfle2 from "../db/sidemenu.json"

  const styles = {
    wrapper:{
        margin: 0,
        padding: 30,
        display: "flex",
        flexDirection:"row",
        flexWrap: "wrap",
        width: "75%",

        borderIeft: "2px solid grey",
        borderRadius: 0,
        justifyContent: "space-between",
    },
};
function MenuList(props)
{
    if(props.number === 1){
    return (
      <div style={styles.wrapper}>
        { 
          Jsonfle1.map((comment) => {
              return (<Comment key={comment.id} name={comment.name} price={comment.price}/>);
            })
        }
      </div>  
    );
      }

    else if(props.number === 2)
    {
      return (
        <div style={styles.wrapper}>
          { 
            Jsonfle2.map((comment) => {
                return (<Comment key={comment.id} name={comment.name} price={comment.price}/>);
              })
          }
        </div>  
      );
    }
}


export default MenuList;