
import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addValue = ()=>{
    console.log("Value is added: ",Math.random());
    if(counter == 20){
      alert("Value should not be more than 20...");
      return 0;
    }
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
    setCounter(prevCounter => prevCounter +1);
  }

  const removeValue = ()=>{
    if(counter == 0){
      alert("Value should not be zero...");
      return 0;
    }
    setCounter(counter-1)
  }
  return (
    <>
      <div>
        Basic React without Hook
       </div>
       <h4>Counter value is {counter}</h4>
       <button onClick={addValue}
       >Add Value
       </button>
       <br/>
       <button
       onClick={removeValue}
       >Remove Value
       </button>
       <div>{counter} <br/> {counter} <br/> {counter}</div>
       <div>{counter} <br/> {counter} <br/> {counter}</div>
       <div>{counter} <br/> {counter} <br/> {counter}</div>
    </>
  )
}

export default App
