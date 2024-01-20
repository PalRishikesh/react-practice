import React from 'react'
import { useRef } from 'react'

const RefsDemo = () => {
    let nameInputRef = useRef();
    function showNameEventHandler(){
        console.log(nameInputRef.current.value);
    }
  return (
    <>
    <span>Name: </span>
    {/* ref is default props in react just like key */}
    <input type='text' ref={nameInputRef}/>
    <button onClick={showNameEventHandler}>Show Name</button>
    </>
  )
}

export default RefsDemo