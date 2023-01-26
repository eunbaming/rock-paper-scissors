import React from 'react'

const Box = (props) => {
  return (
    <div className='choice-card'>
      <h1>{props.title}</h1>
      <img className='item-img' src= {props.item == null ? "https://kininaru.co.kr/web/product/big/201907/dd72cc21be651d81b1bda57ad8a90db6.jpg" : props.item.img}/>
      <h3>TIE</h3>
    </div>
  )
}

export default Box
