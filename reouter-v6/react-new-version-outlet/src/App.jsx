
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home/Home';
import About from './components/About/about';
import Contact from './components/Contact/Contact';
import User from './components/User/user';
import Github, { gitHubUserDetail } from './components/Github/Github';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"user/:id",
          element:<User/>
        },
        {
          path:"github",
          element:<Github/>,
          loader:gitHubUserDetail
        }
      ]
    }
  ]);

  // We can write route in different format
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/> }>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:id' element={<User/>}/>
        {/* <Route path='github' element={<Github/>}/> */} 
        <Route loader={gitHubUserDetail} path='github' element={<Github/>}/>
      </Route>
    )
  )
  return (
    <>
    <h1 className="text-3xl font-bold underline"> Hello world On App ! </h1>
     
      <RouterProvider router={router}/>
  
    </>
  )
}

export default App
