import { useState } from 'react';
import './App.css';
import Box from './component/Box.js';

// 1. 박스 2개
// 2. 가위 바이 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock : { name: "Rock", img :"https://media.istockphoto.com/id/487221745/photo/stone-ball.jpg?s=612x612&w=0&k=20&c=zF9hWyar2kNl_n8A4NtEAYiWM6qYI6Vxseq6L-AI0v0="},
  scissors : { name: "Scissors", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl8U1Lc1mLWLOJwXgiB-cgxzbqVUPf1041Q&usqp=CAU"},
  paper : { name: "Paper", img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"},
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const [result, setResult] = useState("")
  const play = (userChoice)=> {
    // 버튼누를때 각 항목에 따른 사진나오기
    setUserSelect(choice[userChoice])
    // 랜덤으로 가위 바위 보 띄우기
    let computerChoice = (randomChoice())
    setComputerSelect(computerChoice);
    // 승패따지기
    setResult(judgement(choice[userChoice], computerChoice ))
  }

  const judgement = (user, computer) =>{
    console.log("user", user, "computer", computer)
    // user == computer tie
    // user == rock, computer == scissor user win
    // user == rock, computer == paper user lose
    // user == sissor, computer == 
    if (user.name == computer.name){
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
    // { 
    //   if(computer.name == "scissors"){
    //     return "win"
    //   } else {
    //     return "lose"
    //   }
    // }
    
  }
  const randomChoice= () => {
   
    // 알고리즘방식
    let itemArray = Object.keys(choice);
    // 객체에 키값만 뽑아서 어레이로 만들어주는 함수이다
    console.log("item Array", itemArray);
    
     // Math.random() 은 0에서 1까지의 숫자중 아무거나 들고온다
    // Math.floor는 소수점 아래의 숫자는 다버리고 정수만 가져온다
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);

    let final = itemArray[randomItem]
    console.log("final", final)

    return choice[final];
   

  }
  

  return (
    <>
      <div className="main">
        <h1>가위바위보 게임</h1>
      </div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}></Box>
        <Box title="Computer" item={computerSelect} result={result}></Box>           
      </div>
      <div className="main">
        <button onClick={() => {play("scissors")}}>가위</button>
        <button onClick={() => {play("rock")}}>바위</button>
        <button onClick={() => {play("paper")}}>보</button>        
      </div>
    </>
  );
}

export default App;
