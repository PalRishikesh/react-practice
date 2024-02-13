import React, { useState } from 'react';
import { DndContext, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import '@dnd-kit/core/dist/styles.css';
// import '@dnd-kit/core/dist/'

const boardSize = 10;
const totalCells = boardSize * boardSize;

const snakesAndLadders = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

function App() {
  const [playerPosition, setPlayerPosition] = useState(1);

  const sensors = useSensors(
    useSensor(() => ({
      // Dummy sensor for simplicity
      activate: () => {},
      deactivate: () => {},
      getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 }),
    }))
  );

  const handleDragEnd = ({ over }) => {
    if (over && over.id) {
      const newPosition = over.id;
      setPlayerPosition(newPosition);
      if (snakesAndLadders[newPosition]) {
        setPlayerPosition(snakesAndLadders[newPosition]);
      }
    }
  };

  const renderCell = (cellNumber) => {
    const isPlayerHere = playerPosition === cellNumber;
    return (
      <div key={cellNumber} id={cellNumber} style={{ border: '1px solid black', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isPlayerHere ? <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'red' }} /> : null}
      </div>
    );
  };

  const renderBoard = () => {
    const cells = [];
    for (let i = 1; i <= totalCells; i++) {
      cells.push(renderCell(i));
    }
    return cells;
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${boardSize}, 50px)`, gridTemplateRows: `repeat(${boardSize}, 50px)`, width: '500px', height: '500px' }}>
        {renderBoard()}
      </div>
    </DndContext>
  );
}

export default App;
