import React, { Component } from 'react'

export default class BoxClass extends Component {
  constructor(props) {
    super(props)
    this.result = ""
  }

  getResult = () => {
    if (
      this.props.title === "Computer" &&
      this.props.result !== "Tie" &&
      this.props.result !== ""){
        this.result = this.props.result === "Win" ? "Lose" : "Win"
      } else {
        this.result = this.props.result
      }
  }

  render() {
    this.getResult()
    return (
      <div className={`choice-card ${this.result}`}>
        <h1>{this.props.title}</h1>
        <img className='item-img' src= {this.props.item == null ? "https://kininaru.co.kr/web/product/big/201907/dd72cc21be651d81b1bda57ad8a90db6.jpg" : this.props.item.img}/>
        <h3>{this.result}</h3>
      </div>
    )
  }
}
