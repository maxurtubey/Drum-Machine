import React from "react";
import Audio from "./Audio";

export default function Pad({ pressKey, setear, ident, lnk }) {

  function changeClass(id) {
    let supuesto = document.getElementById(id);
    supuesto.className = "activvo";
    setTimeout(function () {
      supuesto.className = "drum-pad";
    }, 100);
  }

  function fromKeyboard(id, pkey) {
    setear(id);
    const sound = document.getElementById(pkey);
    sound.currentTime = 0;
    sound.play();
  }

  document.onkeyup = function (e) {
    var key = e.key;
    if (key === 'q' || key === 'Q') {
      fromKeyboard('Chord-1', 'Q');
      changeClass('Chord-1');
    }
    if (key === 'w' || key === 'W') {
      fromKeyboard('Chord-2', 'W');
      changeClass('Chord-2');
    }
    if (key === 'e' || key === 'E') {
      fromKeyboard('Chord-3', 'E');
      changeClass('Chord-3');
    }
    if (key === 'a' || key === 'A') {
      fromKeyboard('Shaker', 'A');
      changeClass('Shaker');
    }
    if (key === 's' || key === 'S') {
      fromKeyboard('Open-HH', 'S');
      changeClass('Open-HH');
    }
    if (key === 'd' || key === 'D') {
      fromKeyboard('Closed-HH', 'D');
      changeClass('Closed-HH');
    }
    if (key === 'z' || key === 'Z') {
      fromKeyboard('Punchy-Kick', 'Z');
      changeClass('Punchy-Kick');
    }
    if (key === 'x' || key === 'X') {
      fromKeyboard('Side-Stick', 'X');
      changeClass('Side-Stick');
    }
    if (key === 'c' || key === 'C') {
      fromKeyboard('Snare', 'C');
      changeClass('Snare');
    }
  }

  function playSound() {
    const sound = document.getElementById(pressKey);
    sound.currentTime = 0;
    sound.play();
  }

  function clickDeBtn() {
    setear(ident);
    playSound()
  }

  return (
    <div id={ident} className='drum-pad' onClick={() => clickDeBtn()}>
      <h1>{pressKey}</h1>
      <Audio ident={pressKey} lnk={lnk}></Audio>
    </div>
  )
}