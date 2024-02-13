// Pawn.js
import React from 'react';
import './Pawn.css';

function Pawn({ color, position, movePawn, pawnIndex }) {
  const handleMove = () => {
    // Simulating dice roll, generate random number between 1 to 6
    const steps = Math.floor(Math.random() * 6) + 1;
    movePawn(color, pawnIndex, steps);
  };

  return (
    <div className={`pawn ${color}`} style={{ left: `${position * 50}px` }} onClick={handleMove}>
      {pawnIndex + 1}
    </div>
  );
}

export default Pawn;
