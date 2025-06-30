import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(5)

  const handleInc = ()=>{
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);
    setCounter(prevCounter => prevCounter+1);



  }
  const handleDec = ()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>hello duniya</h1>        
      <p>counter: {counter}</p>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
    </>
  )
}

export default App
