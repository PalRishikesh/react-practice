import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { users } from './fakeuser.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App users={users}/>
  </React.StrictMode>,
)
