import React from 'react'

//  이 함수 이름이랑 export 함수이름은 같은 글자로 해야한다
const Box = (props) => {
    console.log("porps", props)
    console.log("props.result", props.result);
    
    let result;
    if (props.title === "Computer" && props.result !== "tie" & props.result !== ""){
        result = props.result === "win" ? "lose" : "win";
    } else {
        result = props.result;
    }
    console.log("result", result);
  return (        
        <div className={"box " + result}>
            <h1>{props.title}</h1>
            <img className="item-img" src={props.item && props.item.img}></img>
            <h2>
                {props.title} {result}
            </h2>
        </div>    
  )
}

export default Box