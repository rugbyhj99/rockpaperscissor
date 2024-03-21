import React, { Component } from 'react'

export default class BoxClass extends Component {
    

  render() {
    console.log("props한 아이템은", this.props);
    let computerResult;
    if(this.props.title === "Computer" && this.props.result !== "tie" && this.props.result !== ""){
        computerResult = this.props.result === "win" ? "lose" : "win";
    } else {
        computerResult = this.props.result;        
    }
    
    return (
      <div className={'box ' + computerResult } >
        <h1>{this.props.title}</h1>
        <img className="item-img" src={this.props.item && this.props.item.img}></img>
        <h2>{this.props.title} {computerResult}</h2>
      </div>
    )
  }
}
