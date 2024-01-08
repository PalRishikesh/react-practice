import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const {id} = useParams();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/palrishikesh')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data);

    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center bg-gray-400 text-white p-4 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url } alt='Git Picture' width={303}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/palrishikesh')
    return response.json();
}