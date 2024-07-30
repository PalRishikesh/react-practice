
import { useState } from "react"
import PercentageStat from "./components/PercentageStat"
function App() {
  const [score, setScore] = useState(25);
  return (
    <>
      <h2>Welcome to functional Component</h2>
      <PercentageStat  label={"New Value"} score ={score} total={200} />
      <button onClick={()=>setScore(20)}> Update Score</button>
    </>
  )
}
export default App







/** Class Component */

// import React from "react"
// class App extends React.PureComponent{
//   constructor(){
//     super()
//     this.state = {
//       count:10
//     }
//   }
//   render(){
//     console.log("Rending...");
//     return (
//       <div>
//         <h2>Welcome to functional Component</h2>
//         {this.state.count}
//         <button onClick={()=>this.setState({count:20})}>Update State</button>
//       </div>
//     )
//   }

// }
// export default App
