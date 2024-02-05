import { useState } from "react";
import "./App.css";
import { Toggle } from "./Components/Toggle";
import useLocalStorage from "use-local-storage";
import { writeJsonFile } from "write-json-file";
// import {writeJsonFile} from "write-json-file";
import * as fs from "fs";

const App = () => {
  const [localStorageMode, setLocalStorageMode] = useLocalStorage(
    "isDarkMode",
    false
  );
  const prefernece = window.matchMedia("(prefers-color-scheme: dark)").matches;

  console.log("localStorageMode: ", localStorageMode);
  if (localStorageMode === false && prefernece === true) {
    setLocalStorageMode(true);
  }
  const [isDark, setIsDark] = useState(localStorageMode);
  const callingJSONWriteFun = async () => {
    // fs.readFile("./Components/a.json","utf-8",(err,jsonString)=>{
    //   if(err){
    //     console.log("file err: ",err)
    //   }
    //   let user = JSON.parse(jsonString);
    //   console.log(user);
    // })
    // const a = fs.readFileSync("./Components/a.json","utf-8");
    // console.log(a);
    // const updatedJSON = {
    //   a: 1,
    //   name: "rishi",
    // };
    //   fs.writeFile('./myFile.json', JSON.stringify(updatedJSON), (err) => {
    //     if (err) console.log('Error writing file:', err);
    // })

    // await writeJsonFile("./Components/foo.json", updatedJSON);
  };
  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      {/* <button onClick={callingJSONWriteFun}>Saving JSON data</button> */}
      <Toggle
        isChecked={isDark}
        handlerChange={() => {
          setIsDark(!isDark);
        }}
      />
      <h1 className="title"> Hellow World</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  );
};

export default App;
