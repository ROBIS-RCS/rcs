import { useState } from 'react'
import Sidebar from "./Components/Sidebar/Sidebar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='w-full h-full p-0 m-0'>
      <Sidebar/> 
    </div>
  )
}

export default App
