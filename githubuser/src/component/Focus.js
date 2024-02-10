import React, { useEffect, useRef } from 'react'

const Focus = () => {
    const inputElemenRef = useRef();
    useEffect(()=>{
        // This will bring focus on text box on component load
        inputElemenRef.current.focus();
        inputElemenRef.current.style.backgroundColor='yellow'
    },[])
  return (
    <div>
        <input type='text' ref={inputElemenRef}/>
    </div>
  )
}

export default Focus
