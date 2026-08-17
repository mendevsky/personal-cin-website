import { useState } from 'react'
import MainHome from './pages/MainHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainHome />
    </div>
  )
}

export default App
