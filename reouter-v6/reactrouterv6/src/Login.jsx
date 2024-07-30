import { useNavigate } from "react-router-dom";

function Login() {
    const naviagte = useNavigate();
    function loginHandle(){
        console.log("Login here");
        localStorage.setItem('login',true);
        naviagte('/')
    }
    return (
        <div>
          <input type='email' placeholder="Email" />  <br/>
          <input type='text' placeholder="Password"/>  <br/>
          <button onClick={()=>(loginHandle())}>Login</button> 
        </div>
    );
}

export default Login;