import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(10);
  const [greeting, setGreeing] = useState('');

  useEffect(() => {
    console.log("Random Gretting on Component Load...");
  }, [])

  useEffect(() => {
    console.log("Random Gretting on random Numnber depedency...");
    window.localStorage.setItem('random', randomNumber)
    switch (randomNumber) {
      case 1:
        setGreeing('Hello');
        break;
      case 2:
        setGreeing('Hi');
        break;
      case 3:
        setGreeing('Howdy');
        break;
      case 4:
        setGreeing('Whats app');
        break;
      default:
        setGreeing('Hello How are you doing...');

    }

    // First time the clean will not run, from second time onword clean will run before side effect and when we are using unmount
    return () => {
      console.log("Side effect clean up...");
      window.localStorage.removeItem("random")
      window.localStorage.setItem("removed", true);
    }
  }, [randomNumber])
  return (
    <div className="App">
      {greeting}
    </div>
  );
}

export default App;
