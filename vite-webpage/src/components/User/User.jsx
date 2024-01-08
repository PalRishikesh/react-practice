import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id} = useParams();
  return (
    <div className='bg-yellow-400 text-white rounded-md'>
      User:{id}
    </div>
  )
}

export default User
