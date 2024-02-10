import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Counter from './component/Counter';
import FindUser from './component/FindUser';
import Focus from './component/Focus';
import { MovieList } from './component/MovieList';
import Parent from './component/Parent';
import GreetingBox from './component/GreetingBox';

function App() {
  const [name, setName] = useState();
  const [counter, setCounter] = useState(0);

  // This will render everything even on button click 
  // const getGreeting = () => {
  //   return `Hello ${name}!`;
  // }

  // This will render only when the text is change other wise it will return the cache copy 
  const getGreeting = useCallback(() => {
    return `Hello ${name}!`;
  },[name]);

  return (
    <div className="App">
      {/* <FindUser/> */}
      {/* <Counter/> */}
      {/* <Focus/> */}
      {/* <MovieList/> */}
      {/* <Parent/> */}
      <input type='text'
      placeholder='Ener your name'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />

      <GreetingBox getGreeting={getGreeting}/>
      {counter}
      <button onClick={()=>setCounter(counter+1)}>+1</button>
    </div>
  );
}

export default App;
