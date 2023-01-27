import React, { Component } from 'react'
import BoxClass from './component/BoxClass'

const choice = {
  rock: {
    name: "Rock",
    img: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  },
  scissors: {
    name: "Scissors",
    img: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper : {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }
}

export default class AppClass extends Component {
  constructor(props){
    super(props)
    this.state = {
      userSelect : null,
      computerSelect : null,
      result : ""
    }
  }
  play = (userChoice) => {
    let computerChoice = this.randomChoice()
    this.setState({
      userSelect : choice[userChoice],
      computerSelect : computerChoice,
      result : this.judgement(choice[userChoice], computerChoice)
    })
  }

  randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "Win" : "Lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "Win" : "Lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "Win" : "Lose"
  }

  render() {
    return (
      <div>
        <div className='main'>
        <BoxClass title='You' item={this.state.userSelect} result = {this.state.result}></BoxClass>
        <BoxClass title='Computer' item={this.state.computerSelect} result = {this.state.result}></BoxClass>
      </div>
      <div className='main'>
        <button onClick={() => this.play("rock")}>Rock</button>
        <button onClick={() => this.play("scissors")}>Scissors</button>
        <button onClick={() => this.play("paper")}>Paper</button>
      </div>
      </div>
    )
  }
}
