import { useEffect, useState } from 'react'
import Demo from './Components/ReducerDemo/Demo';

function App() {
  console.log("App Component is rending...");
  const [resourceType, setResourceType] = useState('Home');
  useEffect(()=>{
    console.log(resourceType);
  },[resourceType])
  // If dependency array is empty than it load at first time only 
  return (
    <>
    <Demo/>
    </>
  )
}

export default App
