// Board.js
import React, { useState } from 'react';
import './Board.css';
import Pawn from './Pawn';

const initialPositions = {
  red: [0, 1, 2, 3],
  green: [0, 1, 2, 3],
  blue: [0, 1, 2, 3],
  yellow: [0, 1, 2, 3],
};

const colors = ['red', 'green', 'blue', 'yellow'];

function Board() {
  const [positions, setPositions] = useState(initialPositions);

  const movePawn = (color, pawnIndex, steps) => {
    const updatedPositions = { ...positions };
    updatedPositions[color][pawnIndex] += steps;
    setPositions(updatedPositions);
  };

  const renderPawns = (color) => {
    return positions[color].map((position, index) => (
      <Pawn key={`${color}-${index}`} color={color} position={position} movePawn={movePawn} pawnIndex={index} />
    ));
  };

  return (
    <div className="board">
      <div className="center"></div>
      <div className="top">
        <div className="row">{renderPawns('red')}</div>
      </div>
      <div className="right">
        <div className="column">{renderPawns('green')}</div>
      </div>
      <div className="bottom">
        <div className="row">{renderPawns('yellow')}</div>
      </div>
      <div className="left">
        <div className="column">{renderPawns('blue')}</div>
      </div>
    </div>
  );
}

export default Board;
