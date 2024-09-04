import './App.css'
import { BrowserRouter, Routes, Route, Navigate, NavLink  } from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
// import ErrorPage from './ErrorPage';
import User2 from './User2';
import Student from './Student';
import Car from './Car';
import Login from './Login';
import Protected from './Protected';
function App() {
  const logoutHandler = ()=>{
    console.log("Logout is here");
    localStorage.removeItem("login")
  }

  return (
    <>
      <h2>Rishikesh Pal</h2>  
      {/* HashRouter is use after domain#login istead of '/' */}
      <BrowserRouter>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        <Link to="/user/rishi">Name page</Link> */}
        {/* In Link we can not use class name */}

        <div className='navbar-side'>
          <NavLink style={ ({isActive}) =>{return {color:isActive ? 'red':'green'}} } className="sidebar-com" to="/"> Home</NavLink>
          <NavLink  style={ ({isActive}) =>{return {color:isActive ? 'red':'green'}} } className="sidebar-com" to="/about"> About</NavLink>
          <NavLink  style={ ({isActive}) =>{return {color:isActive ? 'red':'green'}} } className="sidebar-com" to="/user/Rishi"> Name Page</NavLink>
          <NavLink  style={ ({isActive}) =>{return {color:isActive ? 'red':'green'}} } className="sidebar-com" to="/user2"> User 2</NavLink>
          <NavLink onClick={logoutHandler}> Logout</NavLink>
        </div>
        <Routes>
          {/* <Route  path='/' element={<h2>This is Home page..</h2>}  /> */}
          <Route path='/' element={<Protected Cmp={Home} />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<Protected Cmp={About} />}  />
          <Route path='/user/:name' element={<User />} />
          {/* Component error page */}
          {/* <Route path='/*' element={<ErrorPage/>}/> */}
          {/* Page redirect to home page */}
          <Route path='/*' element={<Navigate to="/" />} />
          <Route path='/user2/' element={<User2/>}>
              <Route path='student' element={<Student/>}/>
              <Route path='car' element={<Car/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
