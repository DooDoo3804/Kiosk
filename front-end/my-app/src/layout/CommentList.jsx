import React from "react";
import Comment from "./Comment";
import { useState, useCallback } from 'react'
import { forwardRef, useImperativeHandle } from "react";

// const comments = [
//   {
//     id:1,
//     name: "빅맥",
//     price: "2000",
//     count: 2,
//   },
//   {
//     id:2,
//     name: "불고기 버거",
//     price: "2000",
//     count: 2,
//   },
//   {
//     id:3,
//     name: "치즈버거",
//     price: "2000",
//     count: 1,
//   },
//   {
//     id:4,
//     name: "치즈버거",
//     price: "2000",
//     count: 1,
//   }
// ];

const styles = {

  wrapper:{
      margin: 0,
      padding: 0,
      borderTop: "1px solid black",
      borderBottom: "1px solid black",
      borderRadius: 0,
      alignitems: "center",
  },
  wrapper2:{
    margin: 0,
    padding: 0,
    borderRadius: 0,
    alignitems: "center",
    display: "flex",
    height: 70,
  },
  headerText:{
      alignitems: "center",
      color: "black",
      fontSize: 35,
      fontWeight: "bold", 
      marginLeft: "15%",
      width: "150px",  
      lineHeight : 2,
  },
  Button:{

    alignitems: "center",
    color: "white",
    fontSize: 35,
    fontWeight: "bold", 
    width: "300px", 
    marginLeft: 160,
    backgroundColor:"#C1121F",
    lineHeight : 2,
    textAlign: "center",
  }
};

function CommentList(props) {
// = forwardRef((props, ref) => {
//   useImperativeHandle(ref, () => ({
//       setOrders() {
//         console.log(props)
  //     }

  // }))
// })
// {

  const [comments, setOrders] = useState([])

  const addToOrder = useCallback((item) => {
    setOrders((orders) => {
      // 이미 담은 상품인지 확인하는 과정
      const finded = orders.find((order) => order.id === item.id);
      const { id, name, price } = item;

      // 담긴 상품이 아니면
      if (finded === undefined) {
        // 새로 데이터를 return
        return [...orders, { id, name, price, count: 1 }]; // 처음 담긴 상품이니까 quantity가 1
      }
      // 이미 담긴 상품 이면 quantity를 1 올려줘야함
      else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              name,
              price,
              count: order.count + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);
    
 
    return (
      <div style={styles.wrapper}>
        <div style={styles.wrapper2}> 
         <div style={styles.headerText}>메뉴</div>
         <div style={styles.headerText}>갯수</div>
         <div style={styles.headerText}>가격</div>
        </div>
        {comments.map((comment) => {
            return (<Comment key={comment.id} menu={comment.name} count={comment.count} price={comment.price}/>);
          })}

        <div style={styles.wrapper2}> 
         <div style={styles.headerText}>총합</div>
         <div style={styles.headerText}>총 가격</div>
         <button style={styles.Button}>결제</button>
        </div>
      </div>  
    );
}


export default CommentList;

