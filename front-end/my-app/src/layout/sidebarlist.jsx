import React from "react";
import Comment from "./sidebar";

const comments = [
  {
    id:4,
    name: "추천메뉴",
  },
  {
    id:1,
    name: "세트만",
  },
  {
    id:2,
    name: "버거만",
  },
  {
    id:3,
    name: "음료",
  }
  ,  
  {
    id:5,
    name: "사이드",
  }
 
];


const styles = {
  wrapper:{
      margin: 0,
      padding: 0,
      width: "25%",
      borderRadius: 0,
  }
};

function sidebalsit(props)
{
    return (
      <div style={styles.wrapper}>
        {comments.map((comment) => {
            return (<Comment key={comment.id} id={comment.id} name={comment.name} comment={comment.comment}/>);
          })}
      </div>  
    );
}


export default sidebalsit;

