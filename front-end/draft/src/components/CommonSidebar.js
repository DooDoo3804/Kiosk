// 일반모드 메뉴선택바(recommendation, burger, side, beverage)
import React from 'react'
import data from '../db/data'

// const menus = [
//     {
//       id: 1,
//       name: "추천메뉴",
//     },
//     {
//       id: 2,
//       name: "햄버거",
//     },
//     {
//       id: 3,
//       name: "사이드",
//     },
//     {
//       id: 4,
//       name: "사이드",
//     },
//   ];



const keys = Object.keys(data)
const menu = keys.map((key, index) => {
    if (index != 2) {
        return (<button key={index}>{ key }</button>)
    }
})

export default function CommonSideBar() {
    return <ul>
    { menu }
</ul>
}
