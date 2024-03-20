import { useState } from 'react'
import Sidebar from "./Components/Sidebar/Sidebar"
import Loginpage from './Components/login/Loginpage'
import SignupPage from './Components/login/SignupPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='w-full h-full p-0 m-0'>
      <Sidebar/> 
      {/* <Loginpage/> */}
    </div>
  )
}

export default App
