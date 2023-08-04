import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hijo from './components/Hijo'

function App() {
  const [count, setCount] = useState(0)
  const hoodie = "hoodie roja";
  return (
   <div>
      <Hijo hoodie={hoodie}></Hijo>
   </div> 
  )
}

export default App
