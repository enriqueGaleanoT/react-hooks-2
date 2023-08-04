import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hijo from './components/Hijo'

export const MiContexto = createContext();

function App() {
  const [count, setCount] = useState(0)
  const hoodie = "hoodie roja";
  return (
   <div>
    <MiContexto.Provider value={hoodie}>
      <Hijo></Hijo>
    </MiContexto.Provider>    
   </div> 
  )
}

export default App
