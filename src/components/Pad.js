import React from "react";
import Audio from "./Audio";

export default function Pad({ pressKey, setear, ident, lnk }) {

  function changeClass(id) {
    let supuesto = document.getElementById(id);
    supuesto.className = "activvo";
    setTimeout(function () {
      supuesto.className = "padbtn";
    }, 100);
  }

  function fromKeyboard(ident) {
    setear(ident);
    const sound = document.getElementById(ident);
    sound.currentTime = 0;
    sound.play();
  }

  document.onkeyup = function (e) {
    var key = e.key;
    if (key === 'q' || key === 'Q') {
      fromKeyboard('Chord-1');
      changeClass('Q');
    }
    if (key === 'w' || key === 'W') {
      fromKeyboard('Chord-2');
      changeClass('W');
    }
    if (key === 'e' || key === 'E') {
      fromKeyboard('Chord-3');
      changeClass('E');
    }
    if (key === 'a' || key === 'A') {
      fromKeyboard('Shaker');
      changeClass('A');
    }
    if (key === 's' || key === 'S') {
      fromKeyboard('Open-HH');
      changeClass('S');
    }
    if (key === 'd' || key === 'D') {
      fromKeyboard('Closed-HH');
      changeClass('D');
    }
    if (key === 'z' || key === 'Z') {
      fromKeyboard('Punchy-Kick');
      changeClass('Z');
    }
    if (key === 'x' || key === 'X') {
      fromKeyboard('Side-Stick');
      changeClass('X');
    }
    if (key === 'c' || key === 'C') {
      fromKeyboard('Snare');
      changeClass('C');
    }
  }

  function playSound() {
    const sound = document.getElementById(ident);
    sound.currentTime = 0;
    // console.log(sound);
    sound.play();
  }

  function clickDeBtn() {
    setear(ident);
    playSound()
  }

  return (
    <>
      <button id={pressKey} className='padbtn' onClick={() => clickDeBtn()}>{pressKey}</button>
      <Audio ident={ident} lnk={lnk}></Audio>
    </>
  )
}