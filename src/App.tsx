import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Profile } from './page/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Profile/>
    </div>
  )
}

export default App
