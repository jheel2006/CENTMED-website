import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure this import is correct
import Navbar from './components/Navbar.jsx';  // Import Navbar Component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

    </>
  )
}

export default App
