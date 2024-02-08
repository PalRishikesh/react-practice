import React, { useState } from 'react'

const Colorize = () => {
    const [color, setColor] = useState('red');
    
    const getRandomColor = ()=>{
        const random = `#${Math.floor(Math.random()*16777215).toString(16)}`
        return random;
    }
    
    const changeColor = () => {
        const color = getRandomColor();
        setColor(color);
    }

    
    return (
        <div className='colorizer'>
            <div className='box' style={{ backgroundColor: color }}>
                {color}
            </div>
            <button onClick={changeColor}> Change color</button>
        </div>
    )
}

export default Colorize
