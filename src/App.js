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
  setInterval(function(){
    setScore(score - 1);
  },1000);
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
        <img style =  {{ 
          "bottom" : Math.random() * 200
         }} id="bird1" src={require("./bird.png")}></img>
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
    </div>
  );
}

export default App;
