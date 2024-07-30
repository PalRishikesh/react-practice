import {useNavigate} from 'react-router-dom';
export default function About(){
    const navigage = useNavigate();
    const naviateHomeFun = ()=>{
        navigage("/")
    }
    return (
        <div>
            This is About us page...
            <button onClick={()=>navigage('/user/rishi?age=12')}>User page from Programically</button>
            <br/>
            <button onClick={()=>naviateHomeFun()}>Home Page</button>
        </div>
    )
}