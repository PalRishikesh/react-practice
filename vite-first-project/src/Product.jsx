import React, { useState } from 'react'

function Product({naaam,data}) {
    const [a,b] = useState(25);
    const [login, setLogin] = useState(false);
  return (
    <div>
      <h2>The valu is {a} and {naaam}</h2>
      {data.age}
      {data.name}<br></br>
      <button onClick={()=>b(a+1)} className='bg-green-400 rounded'>Click here</button>
      <div className={`${login === false ? 'text-red-600': 'text-green-400'} `}>
        { login === false ? "Please login ": "Welcome to our website..." }
      </div>
      <button className='text-green-300 rounded-md bg-black' onClick={()=>{
        setLogin(!login);
      }}>Set login</button>
    </div>
  )
}

export default Product
