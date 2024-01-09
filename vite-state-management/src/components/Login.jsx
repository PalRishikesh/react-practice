import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    // Normal use state
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handleLogin =(e)=>{
        e.preventDefault()
         //Seding the value to context
        setUser({userName,password})
    }
  return (
    <div>
      <div>
        <h2>Login</h2>
        <input
        type='text' placeholder='user_name'
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}
         />
        <input type='password' placeholder='password'
        value={password}
        onChange={(e)=> setpassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
export default Login
