import React from "react";
import Comment from "./sidebar";

const comments = [
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
  },
];


const styles = {
  wrapper:{
      margin: 0,
      padding: 40,
    
      width: "15%",
      border: "1px solid grey",
      borderRadius: 0,
  },


};

function sidebalsit(props)
{
    return (
      <div style={styles.wrapper}>
        {comments.map((comment) => {
            return (<Comment key={comment.id} name={comment.name} comment={comment.comment}/>);
          })}
      </div>  
    );
}


export default sidebalsit;

