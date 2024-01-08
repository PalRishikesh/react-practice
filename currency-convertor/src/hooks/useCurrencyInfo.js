import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    console.log("use currency: ",currency);
    const [data, setData] = useState({});
    useEffect(()=>{

        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // .then((res)=>{
        //     console.log(res.json());
        // })
        // .then((res)=>{
        //     console.log("res: ",res);
        //     setData(res[currency])
        // })
        axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then(jsonData=>{
            setData(jsonData.data[currency])
        })
        

    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo