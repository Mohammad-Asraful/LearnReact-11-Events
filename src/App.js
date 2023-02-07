import React, { useState } from "react";
// import './index.css'

const App = () => {

  const purple = '#8e44ad'

  const [bg, setBg] = useState(purple)
  const [name, SetName] = useState("Click Me")

  const bgChange = () => {
    // console.log('first')
    let newBg = '#34495e'
    setBg(newBg)
    let buttonText = 'Ouch❗❗ 😮'
    SetName(buttonText)
  }


  const bgBack = () => {
    setBg(purple)
    SetName("I'm Back. 😄")
  }

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
      </div>
    </>
  );
}

export default App;
