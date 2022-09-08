import React, { useState } from "react";
import Display from "./Display";
import Pad from "./Pad";

export default function DrumMachine() {

  const songBank = {
    chord1: ['Chord-1', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'],
    chord2: ['Chord-2', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'],
    chord3: ['Chord-3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'],
    shaker: ['Shaker', 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'],
    openhh: ['Open-HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'],
    closehh: ['Closed-HH', 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'],
    punchy: ['Punchy-Kick', 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'],
    side: ['Side-Stick', 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'],
    snare: ['Snare', 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']
  }

  const [bank, setbank] = useState("")
  
  return (
    <div className="section">
      <div id="drum-machine" className="container">
        <div className="row">
          <div className="col-8 pad">
            <div className="row top">
            <div className="col">
                <Pad setear={setbank} pressKey={"Q"} ident={songBank.chord1[0]} lnk={songBank.chord1[1]}/>
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"W"} ident={songBank.chord2[0]} lnk={songBank.chord2[1]}/>
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"E"} ident={songBank.chord3[0]} lnk={songBank.chord3[1]}/>
              </div>
            </div>
            <div className="row middle">
              <div className="col">
                <Pad setear={setbank} pressKey={"A"} ident={songBank.shaker[0]} lnk={songBank.shaker[1]}/>
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"S"} ident={songBank.openhh[0]} lnk={songBank.openhh[1]}/>
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"D"} ident={songBank.closehh[0]} lnk={songBank.closehh[1]}/>
              </div>
            </div>
            <div className="row bottom">
              <div className="col">
                <Pad setear={setbank} pressKey={"Z"} ident={songBank.punchy[0]} lnk={songBank.punchy[1]}/>
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"X"} ident={songBank.side[0]} lnk={songBank.side[1]}/>
              </div>
              <div className="col">
                <Pad setear={setbank} pressKey={"C"} ident={songBank.snare[0]} lnk={songBank.snare[1]}/>
              </div>
            </div>
          </div>
          <div className="col-4 dColumn">
            <Display displayText={bank} />
          </div>
        </div>
      </div>
    </div>
  );
}