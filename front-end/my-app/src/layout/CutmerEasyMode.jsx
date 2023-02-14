// 이지모드 선택 메뉴 이미지창
import React, { useEffect } from 'react'
import { useState } from 'react'
import CustmerEasyModeCSS from './CutmerEasyMode.css'

export default function CutmerEasyMode(props) {

    const [state, setstate] = useState(0);

   // console.log('&' + props.imagemenu);

   useEffect(() => {
        if(props.imagemenu !== ''){
        props.checkfun(state);
        }
    },[state]);

    
  return (
    <div className='imagebar'>
        <img className="imagechange"src={process.env.PUBLIC_URL + `./images/${props.imagemenu}.png`}/>
  
        <div className="btn">
            <button className="blue">커스텀하기</button>
            <button  onClick={()=> setstate(state + 1)} className="blue" >이거먹기</button>
        </div>
    </div>
  )
}
