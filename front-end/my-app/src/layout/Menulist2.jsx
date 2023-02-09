import React, {userState, useState, useEffect} from "react";
import Comment from "./Menu2";
import Jsonfle1 from "../db/recommend.json"
import Jsonfle2 from "../db/setmenu.json"
import Jsonfle3 from "../db/single.json"
import Jsonfle4 from "../db/drink.json"
import Jsonfle5 from "../db/sidemenu.json"

let jsonfile = [];
jsonfile.push(Jsonfle1);
jsonfile.push(Jsonfle2);
jsonfile.push(Jsonfle3);
jsonfile.push(Jsonfle4);
jsonfile.push(Jsonfle5);

const styles = {
    wrapper:{
        border: 0,
        margin: 0,
        padding: 20,
        paddingTop: 0,
        display: "flex",
        flexDirection:"row",
        flexWrap: "wrap",
        width: "75%",
        borderRadius: 0,
        justifyContent: "space-between",
    },
};
function MenuList(props)
{

  const [select, setselect] = useState(-1);

    useEffect(() => {
      
          if(select !== -1){
          let list = document.getElementsByClassName("menu");
  
          for(let i = 0; i < list.length; i++)
          {
              list[i].style.backgroundColor  = "#FDF0D5";
          }
          list[select - 1].style.backgroundColor="#C1121F";
          }
      },[select]);

  return (
      <div style={styles.wrapper}>
        { 
          jsonfile[props.number - 1].map((comment) => {
              return (<Comment imageMenu={props.imageMenu} key={comment.id} id={comment.id} name={comment.name} price={comment.price} setuse={setselect} setcustmer={props.setcustmer} setside={props.setside}/>);
            })
        }
      </div>  
    );
}


export default MenuList;