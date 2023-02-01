// 이지모드 선택 메뉴 이미지창
import React from 'react'
import { useState } from 'react'
import CustmerEasyModeCSS from './CutmerEasyMode.css'

export default function CutmerEasyMode() {
    // 장바구니 state 생성
    const [cartlist, addCartlist] = useState(["치즈버거", "코카콜라", "치즈스틱"])
    // 버큰 클릭하면 장바구니 addCartlist 되도록


  return (
    <div className='imagebar'>
        <div className="image">
            {cartlist.map((item,index) => (
                <img src={process.env.PUBLIC_URL + `./images/${item}.png`}
                key={index} alt={item}/>
            ))}          
        </div>
        <div className="btn">
            <button className="blue">커스텀하기</button>
            <br />
            <button className="red" >이거 먹기</button>
        </div>
    </div>
  )
}
