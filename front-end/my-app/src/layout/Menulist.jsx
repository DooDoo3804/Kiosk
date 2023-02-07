import React, {userState, useState, useEffect} from "react";
import Comment from "./Menu";
import Jsonfle1 from "../db/recommend.json"
import Jsonfle2 from "../db/setmenu.json"
import Jsonfle3 from "../db/single.json"
import Jsonfle4 from "../db/drink.json"
import Jsonfle5 from "../db/sidemenu.json"

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
    if(props.number=== 1){
    return (
      <div style={styles.wrapper}>
        { 
          Jsonfle1.map((comment) => {
              return (<Comment imageMenu={props.imageMenu}key={comment.id} name={comment.name} price={comment.price}/>);
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
                return (<Comment  imageMenu={props.imageMenu} key={comment.id} name={comment.name} price={comment.price}/>);
              })
          }
        </div>  
      );
    }
    else if(props.number === 3)
    {
      return (
        <div style={styles.wrapper}>
          { 
            Jsonfle3.map((comment) => {
                return (<Comment imageMenu={props.imageMenu} key={comment.id} name={comment.name} price={comment.price}/>);
              })
          }
        </div>  
      );
    }
    else if(props.number === 4)
    {
      return (
        <div style={styles.wrapper}>
          { 
            Jsonfle4.map((comment) => {
                return (<Comment imageMenu={props.imageMenu}  key={comment.id} name={comment.name} price={comment.price}/>);
              })
          }
        </div>  
      );
    }
    else if(props.number === 5)
    {
      return (
        <div style={styles.wrapper}>
          { 
            Jsonfle5.map((comment) => {
                return (<Comment  imageMenu={props.imageMenu} key={comment.id} name={comment.name} price={comment.price}/>);
              })
          }
        </div>  
      );
    }
}


export default MenuList;