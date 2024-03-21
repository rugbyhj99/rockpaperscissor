import React, { Component } from 'react'
import './App.css';
import BoxClass from './component/BoxClass.js';

const choice = {
    rock : { name: "Rock", img :"https://media.istockphoto.com/id/487221745/photo/stone-ball.jpg?s=612x612&w=0&k=20&c=zF9hWyar2kNl_n8A4NtEAYiWM6qYI6Vxseq6L-AI0v0="},
    scissors : { name: "Scissors", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl8U1Lc1mLWLOJwXgiB-cgxzbqVUPf1041Q&usqp=CAU"},
    paper : { name: "Paper", img: "https://m.media-amazon.com/images/I/61OorFhm6SL._AC_UF894,1000_QL80_.jpg"}, 
}
export default class AppClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            userSelect : null,
            computerSelect : null,
            result : "",            
        };
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect : computerChoice,
            result: this.judgement(choice[userChoice], computerChoice) 
        });
    };

    judgement = (user, computer) => {
        if (user.name == computer.name){
            return "tie"
        } else if (user.name == 'Rock')
        return computer.name == "Scissors" ? "win" : "lose";
        else if (user.name == "Scissors")
        return computer.name == "paper" ? "win" : "lose";
        else if (user.name == "Paper")
        return computer.name == "Rock" ? "win" : "lose";
    };

    randomChoice = () => {
        const itemArray = Object.keys(choice);
        // 객체에 키값을 뽑아서 array로 만들어주는 함수이다.
        const randomItem = Math.floor(Math.random() * itemArray.length);
        // Math.random() 은 0에서 1까지의 숫자중 아무거나 들고온다
        // Math.floor는 소수점 아래의 숫자는 다버리고 정수만 가져온다
        const final = itemArray[randomItem];
        return choice[final];        
      }    
    
  render() {
    
    return (
      <div>
        <div className="main">
            <h1>가위바위보 게임</h1>
        </div>
        <div className="main">
            <BoxClass title="You" item={this.state.userSelect} result={this.state.result}></BoxClass>
            <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}></BoxClass>            
        </div>
        <div className="main">
            <button onClick={() => { this.play("scissors") } }>가위</button>
            <button onClick={() => { this.play("rock") } }>바위</button>
            <button onClick={() => { this.play("paper") } }>보</button>
        </div>
      </div>
    )
  }
}
