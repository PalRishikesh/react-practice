import React from "react";
import "./Demo.css";
import { useReducer } from "react";
import { useRef } from "react";
const Demo = () => {
  // Reducer will have two element (state and stateUpdating function)
  // And take two arguement 1st as function, 2nd is initial
  // value (since we are using reducer for complex state we can use a object)
  // Whenever we will call dispatcher function internally it will call reducerFn
  function reducerFn(currentState, action) {
        switch(action){
            case 'increment':
                return {count: currentState.count+1};
            case 'decrement':
                return {count: currentState.count-1};
            default:
                return currentState;
        }
  }
  let [state, dispatcher] = useReducer(reducerFn, { count: 0 });
  
  // Some Form input example 
  function emailReducer(state, action){
    switch(action.type){
        case 'EMAIL_INPUT':
        // return {value: action.val, isValid: action.val.include('@')}
        // OR we can use below also
        return {value: state.value, isValid: action.value.include('@')}
    }

  }
  // Seting isValid undefined so that invalid should not display at on component load
  let [emailState, emailDispatcher] = useReducer(emailReducer, {value:'',isValid:undefined})

  const onBlurEmailHandlerFn=()=>{
    emailDispatcher({val: emailState.value, type: 'EMAIL_VAVLIDE'})
  }

  function inCrement(){
    dispatcher('increment');
  }
  function deCrement(){
    dispatcher('decrement');
  }

  return (
    <div className="container">
      <button onClick={deCrement}>-</button>
      <span>{state.count}</span>
      <button onClick={inCrement}>+</button>
    </div>
  );
};

export default Demo;


// AuthContext.js
// import React from "react";
// let AuthContext = React.createContext({isLoggedIn: false});
// export default AuthContext;

// // App.js
// // Passing for true for testing
// let isLoggedInState = true;
// <AuthContext.Provider value = {{isLoggedIn : isLoggedInState }}> 
//     <MainHeader>
//         <Login></Login>
//         <Home></Home>
//     </MainHeader>
// </AuthContext.Provider>
// // Home
// import React, {useContext} from "react";

// const Home(){
//    let context = useContext(AuthContext);
//    // We can access the value by
//    {context.isLoggedIn}
// }




let emailRef = useRef();
let pwdRef = useRef();

// Check logic set ref focus if some input is invalid 
if(!emailState.isValid){
    emailRef.current.focus()
}
else if(!passwordState.isValid){
    pwdRef.current.focus();
}

return (
    <div>
        <input ref={emailRef} type="email"  onBlur={}/>
        <input ref={pwdRef} type="password"  onBlur={}/>
    </div>
)