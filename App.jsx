import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './component/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <div className="container mx-auto">
      <div className="bg-red-600">
        <h1>Your ToDo's</h1>
      </div>
    </div>
    </>
  )
}

export default App
