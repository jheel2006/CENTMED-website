import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure this import is correct
import Navbar from './components/Navbar.jsx';  // Import Navbar Component
import Home from "./pages/Home.jsx";
import Research from "./pages/Research.jsx";
import People from "./pages/People.jsx";
import Publications from "./pages/Publications.jsx";
import News from "./pages/News.jsx";
import Events from "./pages/Events.jsx";
import Careers from "./pages/Careers.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/people" element={<People />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  )
}

export default App
