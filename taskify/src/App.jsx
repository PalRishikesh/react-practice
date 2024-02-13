import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor } from '@dnd-kit/core'
import './App.css'
import { useState } from 'react'
import Column from './components/colums/Column';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

function App() {

  const [task, setTask] = useState([
    {id:1, title:'Add tests to homepage'},
    {id:2, title:'Fix styling in about page'},
    {id:3, title:'Learn how to center a div'}
  ]);

  // Helper function
  const getTaskPos = id => task.findIndex(singleTask => singleTask.id === id);

  const handleDragEnd = event=>{
    const {active, over} = event;
    if(active.id === over.id) return;
    setTask(task => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(task, originalPos, newPos);
    })
  }

  const sensorsd = useSensor(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter:sortableKeyboardCoordinates
    })

  );

  return (
    <div className='App'>
      <h1>My Task</h1>
      <DndContext  onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column tasks={task}/>
      </DndContext>
    </div>
  )
}

export default App
