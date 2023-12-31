import {useState, useEffect} from 'react';
import './App.css';

// Component
// const PersonComponent = (props)=>{
//   return (
//     <>
//     <h1>Name: {props.name}</h1>
//     <h1>Last name :  {props.lastName}</h1>
//     <h1>Age : {props.age}</h1>
//     </> 
//   );
// }

const App = ()=>{
  const name = "Rishikesh";
  const isNameShowing = true;

  // State
  const [counter, setCounter ] = useState(0);
  useEffect(()=>{
    setCounter(101)
  },[]) 
  return (
    <div className="App">
     {/* <h1>Hello, {isNameShowing ? name : 'Some one'}!!</h1>
     {isNameShowing ? (
      <>
      Welcome bck
      </>
     ):(
      <> 
      <h4>Hi {name}</h4>
      </>
     ) }

     <PersonComponent name={'Rishi'} lastName = {'Pal'} age={'30'}/>
     <PersonComponent name={'Raj'} lastName = {'Patel'} age={'25'}/>
     <PersonComponent name={'Shiv'} lastName = {'Mishra'} age={'45'}/>
     <PersonComponent name={'Rani'} lastName = {'Singh'} age={'15'}/> */}

     <button onClick={()=>{
      setCounter((prevCounter)=>{
        return prevCounter-1;
      })
     }}> - </button>
     <h1>{counter}</h1>
     <button onClick={()=>{
      setCounter((prevCounter)=>{
        return prevCounter+1;
      })
     }}> + </button>
    </div>
  );
}

export default App;
