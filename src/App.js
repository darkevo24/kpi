import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var [score,setScore] = useState(10);
  var [cloud,setCloud] = useState(900);
  var [left,setLeft] = useState(0);
  var [right,setRight] = useState(0);
  var [up,setUp] = useState(0);
  var [down,setDown] = useState(0);

  function click(){
    document.getElementById("star1").style.animationPlayState = "running";
    document.getElementById("parasut1").style.animationPlayState = "running";
    document.getElementById("bird1").style.animationPlayState = "running";
    document.getElementById("cloud1").style.animationPlayState = "running";
    setInterval(function(){
      setScore(score - 1);
    },1000);
  }
  function pause(){
    document.getElementById("star1").style.animationPlayState = "paused";
    document.getElementById("parasut1").style.animationPlayState = "paused";
    document.getElementById("bird1").style.animationPlayState = "paused";
    document.getElementById("cloud1").style.animationPlayState = "paused";
  }
  document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            setLeft(left-100);
            break;
        case 38:
          setUp(up - 100);
            break;
        case 39:
            setLeft(left + 100);
            break;
        case 40:
          setUp(up + 100);
            break;
    }
  });
  return (
    <div className="App">
      <div id="score">
        <h1>Fuel : {score}</h1>
      </div>
      <div id="fuel"></div>
      <div id="cloud">
        <img id="cloud1" src={require("./cloud.png")}></img>
      </div>
      <div id="bird">
        <img  id="bird1" src={require("./bird.png")}></img>
      </div>
      <div id="player">
        <img style={{ 
          "left" : left,
          "right" : right,
          "top" : up,
          "bottom" : down
         }} id="player1" src={require("./player.png")}></img>
      </div>
      <div id='parasut'>
        <img id="parasut1" src={require("./parasut.png")}>

        </img>
      </div>
      <div id='star'>
        <img id="star1" src={require("./star.png")}>

        </img>
      </div>
      <button id="start" onClick={click}>Start</button>
      <button id="pause" onClick={pause}>Pause</button>
    </div>
  );
}

export default App;
