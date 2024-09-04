import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
const Github = () => {
    const data = useLoaderData();
    // const [data, setData]  = useState([]);

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/palrishikesh")
    //     .then((response)=> response.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // })
  return (
    <div>Github {data.following}</div>
  )
}

export default Github

export const gitHubUserDetail=async()=>{
    const response = await fetch("https://api.github.com/users/palrishikesh");
    return response.json();
}