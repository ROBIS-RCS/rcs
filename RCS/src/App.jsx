import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='w-full h-full p-0 m-0'>
      <Sidebar/>
      <p>Hello</p>
    </div>
  )
}

export default App
