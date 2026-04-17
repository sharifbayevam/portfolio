import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="card">
      <h1>My Portfolio</h1>

      <p>Hello! My name is Hosiyat 👋</p>

      <p>
        I am a web developer building modern and responsive websites using HTML, CSS and JavaScript.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <h2>Projects</h2>
      <p>Portfolio Website</p>
      <p>Calculator App (coming soon)</p>

    
      <p>Email: <a href="mailto:sharifbayevao8@gmail.com">sharifbayevao8@gmail.com</a></p>

      <button>Contact me</button>
    </div>
  )
}

export default App
