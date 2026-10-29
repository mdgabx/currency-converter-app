import { useState } from 'react'
import './App.css'
import { CurrencyConverter } from './components/currency-converter.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CurrencyConverter />
    </>
  )
}

export default App
