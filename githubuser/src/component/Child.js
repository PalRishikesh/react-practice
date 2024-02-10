import React from 'react'

const Child = ({ header }) => {
    console.log("Child rendering...");
    return (
        <div className='child'>
            <h1>{header}</h1>
            <p>Sample text message are here and find the value</p>
        </div>
    )
}
export default React.memo(Child)
// only parent component will changes unless some content is change for child component
