import React, { useEffect, useState } from 'react'

const GreetingBox = ({getGreeting}) => {
    const [greeting, setGreeting] = useState();

    useEffect(()=>{
        setGreeting(getGreeting());
        console.log("Greeting box: useEffect");
    },[getGreeting]);

  return (
    <div>{greeting}</div>
  )
}

export default GreetingBox