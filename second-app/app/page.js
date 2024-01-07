"use client";
// import React, { useState } from "react";
// import Header from "@/Components/Header";
// const page = () => {
//   const [marks, setMarks] = useState(100);
//     const [user, setUser] = useState('Rishi');

// //   return (
// //     <>
// //       <div>
// //         <h1 className="font-bold text-xl text-red-700">
// //           {" "}
// //           My total mark is {marks}
// //         </h1>
// //       </div>

// //       <button
// //         onClick={() => {
// //           setMarks(35);
// //         }}
// //         className="bg-gray-400 px-5 py-2 rounded"
// //       >
// //         Update
// //       </button>
// //     </>
// //   );

// return (
//     <>
//     <Header user = {user}/>
//     {user}
//     </>
// );
// };

// export default page;


// import React from 'react'
// import  Link  from 'next/link';
// import Header from '@/Components/Header';

// const page = () => {
//   return (
//     <div>
//      <Header/>
//       <h3>Home page</h3>
//     </div>
//   )
// }

// export default page


import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {

   
    const [images, setImages]=useState([]);
    const getImages = async()=>{
        try {
            const response =await axios.get('https://picsum.photos/v2/list');
            console.log("response:",response);
            setImages(response.data);
            console.log(images);
        } catch (error) {
            console.error("error: ",error)
        }
    }
  return (
    <div>
      <h3>Home page</h3>
      <button onClick={getImages}
       className='px-5 py-4 bg-green-500'>Get Images</button>
    <div>
        {
            images.map((img,i)=>{
               return <img key={i}
               src={img.download_url}
               width={200}
               />
            })
        }
    </div>
    </div>
  )
}

export default page
