import { useState } from "react";


function useHttp(){
  let [errrorMessage, setErrorMessage] = useState(null);
  
  function sendHttpRequest(url, method, body, actionFn){
        fetch(url,{
            method: method,
            body: body ? JSON.stringify(body) : null
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error("Something went wront. Please try again later.");
            }
            let data = response.json();
            actionFn(data);
        })
        .catch((error)=>{
            setErrorMessage(error.message);
        })
  }

  return [errrorMessage, sendHttpRequest]

}

export default useHttp;