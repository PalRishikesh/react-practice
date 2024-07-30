import { Link, Outlet } from "react-router-dom"
export default function User2(){
    return (
        <>
        <div>This is User 2 page Content...</div>
        <Link to="student">Student</Link>
        <Link to="car" state={{
            name:"Rishi",
            age:"25",
            address:"Mumbai"
        }}>Car</Link>
        <Outlet/>
        </>
    )
        
}