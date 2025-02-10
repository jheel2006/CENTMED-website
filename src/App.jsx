import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure this import is correct
import Navbar from './components/Navbar.jsx';  // Import Navbar Component
import Home from "./pages/Home.jsx";
import Research from "./pages/Research.jsx";
import Researchers from "./pages/Researchers.jsx";
import Publications from "./pages/Publications.jsx";
import Leadership from "./pages/Leadership.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/researchers" element={<Researchers />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/news-events" element={<NewsEvents />} />
      </Routes>
    </Router>
  )
}

export default App
