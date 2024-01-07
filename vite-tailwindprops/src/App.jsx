import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  const personalDetail = {
    first_name:"Rishi",
    last_name:"Pal",
    age:'21'
  }
  const personalDetail2 = {
    first_name:"Raj",
    last_name:"Pal",
    age:'18'
  }
 return (
  <>
  <h1 className='bg-green-500 text-white p-5 rounded-lg mb-5'>Tailwinds Test</h1>
  <Card name='Rishi Pal' details={personalDetail} btnText='Click to know more'/>
  <Card name='Raj Pal' details={personalDetail2} />
  </>
 )
}

export default App



{/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
<div class="md:flex">
  <div class="md:shrink-0">
    <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/16453280/pexels-photo-16453280/free-photo-of-wild-eagle-sitting-on-tree-branch.jpeg" alt="Modern building architecture"/>
  </div>
  <div class="p-8">
    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
    <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
  </div>
</div>
</div> */}