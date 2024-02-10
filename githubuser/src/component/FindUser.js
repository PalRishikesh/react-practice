import React, { useState } from 'react'
import GitHubUser from './GitHubUser';

const FindUser = () => { 
    const [userName, setUserName] = useState('');

  return (
    <div className='find-user'>
        <h2>Find user</h2>
        <form>
            <div className='form-group'>
            <label htmlFor='username'></label>
            <input
            type='text'
            placeholder='Enter Username'
            onChange={(event)=>setUserName(event.target.value)}
            />
            </div>
        </form>
        <div className='result'>
            {
                userName ? <GitHubUser username = {userName} /> : <p>Please initaiate  a search!!</p>
            }
        </div>
    </div>
  )
}

export default FindUser
