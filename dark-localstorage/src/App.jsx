import { useState } from "react"
import "./App.css"
import { Toggle } from "./Components/Toggle";
import useLocalStorage from "use-local-storage";

const App = () => {

  const [localStorageMode, setLocalStorageMode] = useLocalStorage("isDarkMode",false);
  const prefernece = window.matchMedia("(prefers-color-scheme: dark)").matches;

  console.log("localStorageMode: ",localStorageMode);
  if(localStorageMode === false && prefernece === true){
      setLocalStorageMode(true)
  }
  const [isDark, setIsDark] = useState(localStorageMode);
  
  return (
    <div className='App' data-theme={isDark ? 'dark':'light'}>
      <Toggle
      isChecked={isDark}
      handlerChange={()=>{
        setIsDark(!isDark)
      }}/>
      <h1 className='title'> Hellow World</h1>
      <div className='box'>
        <h2>This is a box</h2>
      </div>
    </div>
  )
}

export default App