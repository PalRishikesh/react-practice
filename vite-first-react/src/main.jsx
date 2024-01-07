import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
// To directly doing with jx
// import { JSX as _jsx } from 'react/jsx-runtime.js'
function MyCustomApp (){
  return (
    <div>
      {/* <h3>This is custom App from custom function inside <code>Main.js</code>File</h3> */}
    </div>
  )
}


// Self made object will not work in react type 
const customHtmlElement = {
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click here to visit Search Engine...'
}

// This is pure html base without any object type will work in react 
const pureHtmlElement = (
  <a href='https://www.google.com/search?q=image' target='_blank'>Click here to visit search images.....</a>
)

// Passing value from variable
const variableValue = ' Please click here Carefully:)';

// Creating object as react compatibility that convert to html by the react # create lement is injected by babel 
const reactTypeElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click here to visit search engine.',
  variableValue
);

const reactTypeElementWithPTag = React.createElement(
  'p',
  {},
  variableValue
);
// Ouput "Please click here Carefully:)"

ReactDOM.createRoot(document.getElementById('root')).render(
  // pureHtmlElement
  reactTypeElement
  // <App/>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <MyCustomApp/> */}
//     <App />
//   </React.StrictMode>,
// )