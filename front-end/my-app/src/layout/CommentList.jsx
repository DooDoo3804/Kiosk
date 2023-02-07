import React , {useState,useCallback, useEffect, useMemo}from "react";
import Comment from "./Comment";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Choose from "./Choose"
const comments = [
  {
    id:1,
    name: "빅맥",
    price: "2000",
    count: 2,
  },
  {
    id:2,
    name: "불고기 버거",
    price: "2000",
    count: 2,
  },
  {
    id:3,
    name: "치즈버거",
    price: "2000",
    count: 1,
  },
  {
    id:4,
    name: "치즈버거",
    price: "2000",
    count: 1,
  }
];

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

let Maxid;

function CommentList(props)
{
  const [Cartlist, setCart] = useState(comments);

  const [nextModal1, setModal1] = useState(false);
  const [nextModal2, setModal2] = useState(false);

 console.log("%^"+ props.imagemenu + `${Maxid + 1}`);

  useEffect(() => {
    if(props.imagemenu !== ''){
        const addcomment = {
        id: `${Maxid + 1}`,
        name: props.imagemenu,
        price: "1000",
        count: 1,
      }
      setCart([...Cartlist, addcomment]);
    }

  }, [props.check]);
  
const Sumprice = () =>{

    let total = 0;
    
    Cartlist.map((comment) => {
      total += Number(comment.price);
    })
    console.log(total);
    return total;
  }

  const location = useMemo(() =>Sumprice(), [Cartlist]);

    return (
      <div style={styles.wrapper}>
        
        <div style={styles.wrapper2}> 
         <div style={styles.headerText}>메뉴</div>
         <div style={styles.headerText}>갯수</div>
         <div style={styles.headerText}>가격</div>
        </div>
        {Cartlist.map((comment) => {
            Maxid = comment.id;
            return (<Comment key={comment.id} menu={comment.name} count={comment.count} price={comment.price}/>);
          })}

        <div style={styles.wrapper2}> 
         <div style={styles.headerText}>총합</div>
         <div style={styles.headerText}>{location}</div>
         <Link to="/Choose"> 
         <button  style={styles.Button}>결제</button>
         </Link>
        </div>
      </div>  
    );
}


export default CommentList;


