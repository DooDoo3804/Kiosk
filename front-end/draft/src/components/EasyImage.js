// 이지모드 선택 메뉴 이미지창
import React from 'react'
import { useState } from 'react'

export default function EasyImage() {
    // 장바구니 state 생성
    const [cartlist, addCartlist] = useState(["치즈버거", "코카콜라", "치즈스틱"])
    // 버큰 클릭하면 장바구니 addCartlist 되도록


  return (
    <div className='imagebar'>
        <div className="image">

            {/* <img src="images/빅맥.png" alt="빅맥" />
            <img src="images/코카콜라.png" alt="코카콜라" />
            <img src="images/해쉬브라운.png" alt="해쉬브라운" /> */}
            
            {/* src 폴더에 파일있을때 require */}
            {/* {cartlist.map(item => (
                <img src={require(`../images/${item}.png`).default}
                alt={item}/>
            ))} */}

            {/* 이미지 public폴더에 있을때 불러오기 */}

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
