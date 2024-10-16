import { useState } from 'react'
import HederCom from './components/headercom/HeaderCom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HederCom/>
    </>
  )
}

export default App
