import React from 'react'

// Handling onClick in component that affect on parent component by onClick={props.onClick}
const Button = (props) => {
  return (
    <div>
      <button className='outline-none px-4 rounded-md text-white'
         style={{backgroundColor:props.color, color:props.textColor}}
         onClick={props.onClick}
         >
            {props.color}
            </button>

    </div>
  )
}

export default Button
