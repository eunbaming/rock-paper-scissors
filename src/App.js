import logo from './logo.svg';
import './App.css';
import Box from './component/Box'

const choice = {
  rock: {
    name: "Rock",
    img: "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://st4.depositphotos.com/24038622/27074/v/1600/depositphotos_270744526-stock-illustration-scissors-cartoon-illustration-pair-scissors.jpg"
  },
  paper : {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }
}

function App() {
  const play = (userChoice) => {
    console.log("선택됨", userChoice)
  }

  return (
    <div>
      <div className='main'>
      <Box title='You'></Box>
      <Box title='Computer'></Box>
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
