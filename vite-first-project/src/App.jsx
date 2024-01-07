import React from 'react'
import Product from './Product'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-300 p-4'>
        This is just a text
      <Product naaam="Simple value from JSX App page" data={{name:"rishi", age:25}}/>
    </div>
  )
}

export default App
