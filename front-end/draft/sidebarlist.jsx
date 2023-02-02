import React from "react";
import Comment from "./sidebar";
import Jsonfle from "../db/date4.json"

// const comments = [
//   {
//     id:4,
//     name: "추천메뉴",
//   },
//   {
//     id:1,
//     name: "세트만",
//   },
//   {
//     id:2,
//     name: "버거만",
//   },
//   {
//     id:3,
//     name: "음료",
//   }
//   ,  
//   {
//     id:5,
//     name: "사이드",
//   } 
// ];


const styles = {
  wrapper:{
      margin: 0,
      padding: 0,
      width: "25%",
      borderRadius: 0,
  },

};

function sidebarlist(props)
{
  // 이지모드인 경우
  // if (props.number === 1) {
  //   return (
  //     <div style={styles.wrapper}> 
  //       {Jsonfle.map((comment) => {
  //         if (comment.id === 6) continue;
  //           return (<Comment key={comment.id} id={comment.id} name={comment.name} comment={comment.comment}/>);
  //         })}
  //     </div>  
  //    ); 
  // } 
  // 일반모드인 경우
//   else if(props.number === 2) {
//     return (
//       <div style={styles.wrapper}> 
//         {Jsonfle.map((comment) => {
//           if (comment.id === 2) continue;
//             return (<Comment key={comment.id} id={comment.id} name={comment.name} comment={comment.comment}/>);
//           })}
//       </div>  
//      ); 
//   } 
return (
       <div style={styles.wrapper}> 
         {Jsonfle.map((comment) => {
             return (<Comment key={comment.id} id={comment.id} name={comment.name} comment={comment.comment}/>);
           })}
       </div>  
)}


export default sidebarlist;

