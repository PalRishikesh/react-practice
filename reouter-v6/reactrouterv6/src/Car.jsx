import { useLocation } from "react-router-dom"
export default function Car(){
    const location = useLocation();
    console.log(location);
    //{pathname: '/user2/car', search: '', hash: '#2564', state: {…}, key: 'li3mf8i1'}
    return (
        <div>This is Car page Content...</div>
    )
        
}