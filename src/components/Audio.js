import React from "react";

export default function Audio({ ident, lnk }) {
  return (
    <audio id={ident} className='clip' src={lnk}></audio>
  )
}