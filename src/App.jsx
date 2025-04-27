import { useState, useEffect } from 'react'
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
import LoadingScreen from "./components/LoadingScreen";
import Footer from './components/Footer.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure the loading screen stays visible for at least 3 seconds
    const minLoadTime = 3200;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadTime);

    return () => clearTimeout(timer); // Cleanup timeout if component unmounts
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
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
      <Footer />
    </Router>
  );
}

export default App;