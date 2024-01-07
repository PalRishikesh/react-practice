import { useState } from 'react'
import './App.css'
import Button from './Button';
function App() {

  const colors = ['green','red','yellow','blue','pink','violet','purple','white','black']

  const [color, setColor] = useState('');
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
 
    <div className='fixed flex flex-wrap bottom-9 justify-center inset-x-5'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md' >

         {/* Static button style */}


         {/* <button className='outline-none px-4 rounded-md text-white'
         style={{backgroundColor:"green"}}
         onClick={()=> setColor("green")}
         >Green</button>

          <button className='outline-none px-4 rounded-md text-white'
         style={{backgroundColor:"red"}}
         onClick={()=> setColor("red")}
         >Red</button> */}


         {/* Dynamic button from array */}

         {
            colors.map((color)=>(
               (color == 'white')? <Button key={color.id} color={color} textColor='black' onClick={()=> setColor(color)}/>:<Button key={color.id} color={color} textColor='white' onClick={()=> setColor(color)}/>
              
            ))
          }

      </div>
    </div>
    </div>
  )
}

export default App
