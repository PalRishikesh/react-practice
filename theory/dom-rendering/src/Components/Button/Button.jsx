import React from 'react'
import "./Button.css"
const Button = (props) => {
    console.log("Button component");
  return (
    <button className='counterBtn' onClick={props.clickHandler}>{props.children}</button>
  )
}
export default React.memo(Button)