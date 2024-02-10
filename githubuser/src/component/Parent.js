import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    console.log("Parent rendering...");
    const [count, setCount] = useState(0);
    return (
        <div className='parent'>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Here</button>
            <Child header={`I am a child`} />
        </div>
    )
}
export default Parent