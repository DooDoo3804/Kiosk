import React , {useState,useCallback, useEffect, useMemo}from "react";
import Comment from "./Comment";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Choose from "./Choose"
import CommentListcss from "./CommentList.css"
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


let Maxid;

function CommentList(props)
{
  const [Cartlist, setCart] = useState(comments);

  const [nextModal1, setModal1] = useState(false);
  const [nextModal2, setModal2] = useState(false);

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
      <div className="wrapper">
        <div className="wrapper2"> 
         <div className="headerText">메뉴</div>
         <div className="headerText">갯수</div>
         <div className="headerText">가격</div>
        </div>
        {Cartlist.map((comment) => {
            Maxid = comment.id;
            return (<Comment key={comment.id} menu={comment.name} count={comment.count} price={comment.price}/>);
          })}

        <div className="wrapper2"> 
         <div className="headerText">총합</div>
         <div className="headerText">{location}</div>
         <Link to="/Choose"> 
         <button  className="Button">결제</button>
         </Link>
        </div>
      </div>  
    );
}


export default CommentList;

