import { useEffect, useState } from "react";

function useCounter(increment = true) {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
        if(increment){
            setCounter((counterPrevious) => counterPrevious + 1);
        }
        else{
            setCounter((counterPrevious) => counterPrevious - 1);
        }
    }, 1000);
  }, []);
  return counter;
}

export default useCounter;
