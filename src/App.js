import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Box from './component/Box'

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

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)

  const play = (userChoice) => {
    console.log("선택됨", userChoice)
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    console.log("randomItem", randomItem)
    let final = itemArray[randomItem]
    console.log(final)
    return choice[final]
  }

  return (
    <div>
      <div className='main'>
      <Box title='You' item={userSelect}></Box>
      <Box title='Computer' item={computerSelect}></Box>
    </div>
    <div className='main'>
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
    </div>
    </div>
  );
}

export default App;
