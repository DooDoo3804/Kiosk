import React from 'react'
import './delay.css';

function delay() {
  return (
    <div>
      <img className="back" src={process.env.PUBLIC_URL + "./images/back.gif"}/>
      <img className="front" src={process.env.PUBLIC_URL + "./images/front.gif"}/>
    </div>
  )
}

export default delay;