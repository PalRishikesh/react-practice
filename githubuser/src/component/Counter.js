import React, { useEffect, useRef, useState } from 'react'

const Counter = () => {
    const countRef = useRef(0); // if we do =  0 (every time on text change value will become 0)
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        countRef.current = countRef.current + 1;
    })

    return (
        <div>
           <input type='text' value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/>
           {countRef.current}
        </div>
    )
}

export default Counter
