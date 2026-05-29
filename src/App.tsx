import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./assets/components/components/Hero";
import Projects from "./assets/components/components/Projects";
import About from "./assets/components/components/About";
import Contact from "./assets/components/components/Contact";
import ChatAI from "./assets/components/components/ChatAI";
import RainEffect from "./assets/components/components/RainEffect";
import CustomCursor from "./assets/components/components/CustomCursor"; // Cursor import qilindi
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Router>
      <div className="app-container min-h-screen" style={{ position: 'relative', overflowX: 'hidden' }}>
        
        {/* Effektlar komponentlari */}
        <RainEffect isDark={isDark} />
        <CustomCursor />

        {/* Navbar */}
        <nav className="apps" style={{ position: 'relative', zIndex: 10 }}>
          <ul className="pages">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button className={`darkm ${isDark ? 'dark-btn' : 'light-btn'}`} onClick={() => setIsDark(!isDark)}>
                {isDark ? '🌙 Dark' : '☀️ Light'}
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Asosiy Kontentlar */}
        <main style={{ position: 'relative', zIndex: 5 }}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <ChatAI />
      </div>
    </Router>
  );
}

export default App;