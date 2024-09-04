import React, { useState } from 'react';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(null)); // Array to hold the current state of each box
  const [isXNext, setIsXNext] = useState(true); // Boolean to keep track of whose turn it is

  const handleClick = (index) => {
    // Prevent overwriting a box that is already filled
    if (boxes[index]) return;

    const newBoxes = [...boxes]; // Create a copy of the boxes array
    newBoxes[index] = isXNext ? 'X' : 'O'; // Set the box to 'X' or 'O'
    setBoxes(newBoxes); // Update the state
    setIsXNext(!isXNext); // Toggle turn
  };

  const resetGame = () => {
    setBoxes(Array(9).fill(null)); // Reset the boxes to empty
    setIsXNext(true); // Set turn back to 'X'
  };

  const getBoxIndex=(number)=>{
    ``
  }

  return (
    <>
      <div className='main'>
        <h1 id='heading'>Tik Toe Game</h1>
      </div>
      <div className="game">

        <div className='container'>
          <div className='box-content'>
          <button className='box' onClick={()=>getBoxIndex(0)}>0</button>
          <button className='box' onClick={()=>getBoxIndex(1)}>1</button>
          <button className='box' onClick={()=>getBoxIndex(2)}>2</button>
          </div>
          <div className='box-content'>
          <button className='box' onClick={()=>getBoxIndex(3)}>3</button>
          <button className='box' onClick={()=>getBoxIndex(4)}>4</button>
          <button className='box' onClick={()=>getBoxIndex(5)}>5</button>
          </div>
          <div className='box-content'>
          <button className='box' onClick={()=>getBoxIndex(6)}>6</button>
          <button className='box' onClick={()=>getBoxIndex(7)}>7</button>
          <button className='box'onClick={()=>getBoxIndex(8)}>8</button>
          </div>

          <button id='reset'>reset  </button>
        </div>
      </div>
    </>
  )


}
// import Navbar from "./components/Navbar"
// import UserDetails from "./components/UserDetails"

// function App() {
//   return (
//     <>
//       <Navbar/>
//       <UserDetails/>
//     </>
//   )
// }

export default App