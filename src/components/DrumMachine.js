import React, { useState } from "react";
import Display from "./Display";
import Pad from "./Pad";

export default function DrumMachine() {

  const [bank, setbank] = useState("")

  return (
    <div className="section">
      <div id="drum-machine" className="container">
        <div className="row">
          <div className="col-8 pad">
            <div className="row top">
              <div className="col">
                <Pad setear={setbank} pressKey={"Q"} ident='Chord-1' />
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"W"} ident='Chord-2' />
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"R"} ident='Chord-3' />
              </div>
            </div>
            <div className="row middle">
              <div className="col">
                <Pad setear={setbank} pressKey={"A"} ident='Shaker' />
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"S"} ident='Open-HH' />
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"D"} ident='Closed-HH' />
              </div>
            </div>
            <div className="row bottom">
              <div className="col">
                <Pad setear={setbank} pressKey={"Z"} ident='Punchy-Kick' />
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"X"} ident='Side-Stick' />
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"C"} ident='Snare' />
              </div>
            </div>
          </div>
          <div className="col-4 dColumn">
            <Display displayText={bank} />
          </div>
        </div>
      </div>
      <audio id='Chord-1' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'></audio>
      <audio id='Chord-2' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'></audio>
      <audio id='Chord-3' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'></audio>
      <audio id='Shaker' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'></audio>
      <audio id='Open-HH' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'></audio>
      <audio id='Closed-HH' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'></audio>
      <audio id='Punchy-Kick' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'></audio>
      <audio id='Side-Stick' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'></audio>
      <audio id='Snare' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'></audio>
    </div>
  );
}