import { useCallback, useMemo, useState } from "react";
import "./Demo.css";
import Span from "./UI/Span/Span";
import Button from "../Button/Button";

const Demo = () => {
    console.log("Rendering..");
    let [count, setCount ] = useState(0);
    let [activate, setActivate] = useState(false);

    // function incrementHandler(){
    //     setCount(count+1);
    // }
    let incrementHandler = useCallback(function(){
      if(activate)
      setCount(count+1);
    },[count,activate])
    // We have to pass dependency as useCallback is call one and it store the reference so value inside will also have old value 
    
    let decrementHandler = useCallback(()=>{
      if(activate)
      setCount(count-1);
    //We can use callback function form when our current depend upon previos snapshot 
    setCount((count)=>{count+1})
    },[count,activate])

    // If we are calling two state updating at same time in a single  synchronously function , react will schedule the batch those update together
    function callActivatedFn(){
        setActivate(true);
        setCount(0)
    }
    let list = useMemo(()=>{
      return [10,150]
    },[]);
  return (
    <div>
        {/* In this Buttom Component we are passing attribute as function, In JS function is also refrence that will change
        so these component will be rerender after using memo also. */}
        <Button clickHandler={decrementHandler}>-</Button>
        <Span>{list}</Span>
        <Button clickHandler={incrementHandler}>+</Button>
        <Button clickHandler={callActivatedFn}>Activated</Button>
    </div>
  )
}

export default Demo