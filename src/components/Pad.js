import React from "react";

export default function Pad({ pressKey, setear, ident }) {

  function fromKeyboard(ident) {
    setear(ident);
    const sound = document.getElementById(ident);
    sound.currentTime = 0;
    sound.play();
  }

  document.onkeyup = function (e) {
    var key = e.key;
    if (key === 'q') {
      fromKeyboard('Chord-1');
    }
    if (key === 'w') {
      fromKeyboard('Chord-2');
    }
    if (key === 'e') {
      fromKeyboard('Chord-3');
    }
    if (key === 'a') {
      fromKeyboard('Shaker');
    }
    if (key === 's') {
      fromKeyboard('Open-HH');
    }
    if (key === 'd') {
      fromKeyboard('Closed-HH');
    }
    if (key === 'z') {
      fromKeyboard('Punchy-Kick');
    }
    if (key === 'x') {
      fromKeyboard('Side-Stick');
    }
    if (key === 'c') {
      fromKeyboard('Snare');
    }
  }

  function playSound() {
    const sound = document.getElementById(ident);
    sound.currentTime = 0;
    sound.play();
  }

  function clickDeBtn(ident) {
    setear(ident);
    playSound()
  }

  return (
    <button className='padbtn' onClick={() => clickDeBtn(ident)}>{pressKey}</button>
  )
}